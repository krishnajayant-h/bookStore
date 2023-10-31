import mongoose, { Schema } from "mongoose";

const booksSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    summary: { type: String, required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export const booksModel = mongoose.model("books", booksSchema);
