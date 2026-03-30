import jwt from "jsonwebtoken";

export default function generateToken(adminUser) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment.");
  }

  return jwt.sign(
    {
      userId: adminUser._id,
      email: adminUser.email,
      role: adminUser.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
}
