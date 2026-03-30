import jwt from "jsonwebtoken";
import AdminUser from "../models/AdminUser.js";

export default async function protectAdmin(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return response.status(401).json({
      success: false,
      message: "Authorization token is required.",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const adminUser = await AdminUser.findById(decoded.userId).select("-password");

    if (!adminUser) {
      return response.status(401).json({
        success: false,
        message: "Admin user not found.",
      });
    }

    request.user = adminUser;
    next();
  } catch (_error) {
    return response.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
}
