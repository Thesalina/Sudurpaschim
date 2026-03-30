import ContactMessage from "../models/ContactMessage.js";

export async function createContactMessage(request, response) {
  const { name, email, message } = request.body;

  if (!name || !email || !message) {
    return response.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  const contactMessage = await ContactMessage.create({
    name,
    email,
    message,
  });

  response.status(201).json({
    success: true,
    message: "Message submitted successfully.",
    data: contactMessage,
  });
}

export async function getContactMessages(_request, response) {
  const messages = await ContactMessage.find().sort({ createdAt: -1 });

  response.json({
    success: true,
    count: messages.length,
    data: messages,
  });
}
