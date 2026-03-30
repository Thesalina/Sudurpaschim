import mongoose from "mongoose";
import CulturePost from "../models/CulturePost.js";

export async function getCulturePosts(_request, response) {
  const posts = await CulturePost.find().sort({ createdAt: -1 });

  response.json({
    success: true,
    count: posts.length,
    data: posts,
  });
}

export async function getCulturePostById(request, response) {
  if (!mongoose.Types.ObjectId.isValid(request.params.cultureId)) {
    return response.status(400).json({
      success: false,
      message: "Invalid culture post id.",
    });
  }

  const post = await CulturePost.findById(request.params.cultureId);

  if (!post) {
    return response.status(404).json({
      success: false,
      message: "Culture post not found.",
    });
  }

  response.json({
    success: true,
    data: post,
  });
}

export async function createCulturePost(request, response) {
  const post = await CulturePost.create(request.body);

  response.status(201).json({
    success: true,
    message: "Culture post created successfully.",
    data: post,
  });
}

export async function updateCulturePost(request, response) {
  if (!mongoose.Types.ObjectId.isValid(request.params.cultureId)) {
    return response.status(400).json({
      success: false,
      message: "Invalid culture post id.",
    });
  }

  const post = await CulturePost.findByIdAndUpdate(
    request.params.cultureId,
    request.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!post) {
    return response.status(404).json({
      success: false,
      message: "Culture post not found.",
    });
  }

  response.json({
    success: true,
    message: "Culture post updated successfully.",
    data: post,
  });
}

export async function deleteCulturePost(request, response) {
  if (!mongoose.Types.ObjectId.isValid(request.params.cultureId)) {
    return response.status(400).json({
      success: false,
      message: "Invalid culture post id.",
    });
  }

  const post = await CulturePost.findByIdAndDelete(request.params.cultureId);

  if (!post) {
    return response.status(404).json({
      success: false,
      message: "Culture post not found.",
    });
  }

  response.json({
    success: true,
    message: "Culture post deleted successfully.",
    data: post,
  });
}
