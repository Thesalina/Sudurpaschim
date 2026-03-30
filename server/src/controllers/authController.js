import bcrypt from "bcryptjs";
import AdminUser from "../models/AdminUser.js";
import generateToken from "../utils/generateToken.js";

export async function loginAdmin(request, response) {
  const { email, password } = request.body;

  if (!email || !password) {
    return response.status(400).json({
      success: false,
      message: "Email and password are required.",
    });
  }

  const adminUser = await AdminUser.findOne({ email: email.toLowerCase().trim() });

  if (!adminUser) {
    return response.status(401).json({
      success: false,
      message: "Invalid email or password.",
    });
  }

  const passwordMatches = await bcrypt.compare(password, adminUser.password);

  if (!passwordMatches) {
    return response.status(401).json({
      success: false,
      message: "Invalid email or password.",
    });
  }

  const token = generateToken(adminUser);

  response.json({
    success: true,
    message: "Login successful.",
    data: {
      token,
      user: {
        id: adminUser._id,
        name: adminUser.name,
        email: adminUser.email,
        role: adminUser.role,
      },
    },
  });
}

export async function getAdminProfile(request, response) {
  response.json({
    success: true,
    data: request.user,
  });
}
