import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    tag: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    sub: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    bestTime: {
      type: String,
      required: true,
      trim: true,
    },
    difficulty: {
      type: String,
      required: true,
      trim: true,
    },
    stay: {
      type: String,
      required: true,
      trim: true,
    },
    reach: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    special: {
      type: String,
      required: true,
      trim: true,
    },
    highlights: {
      type: [String],
      default: [],
    },
    gallery: {
      type: [String],
      default: [],
    },
    nearby: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;
