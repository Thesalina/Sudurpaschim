import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import connectDatabase from "../config/db.js";
import AdminUser from "../models/AdminUser.js";
import Destination from "../models/Destination.js";
import CulturePost from "../models/CulturePost.js";
import { culturePosts, destinations } from "../data/seedData.js";

dotenv.config();

async function seedDatabase() {
  await connectDatabase();

  const adminPassword = process.env.ADMIN_PASSWORD || "admin12345";
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await AdminUser.deleteMany({});
  await Destination.deleteMany({});
  await CulturePost.deleteMany({});

  await AdminUser.create({
    name: process.env.ADMIN_NAME || "Sudurpashchim Admin",
    email: process.env.ADMIN_EMAIL || "admin@sudurpaschim.local",
    password: hashedPassword,
  });
  await Destination.insertMany(destinations);
  await CulturePost.insertMany(culturePosts);

  console.log("Database seeded successfully.");
  process.exit(0);
}

seedDatabase().catch((error) => {
  console.error("Failed to seed database:", error);
  process.exit(1);
});
