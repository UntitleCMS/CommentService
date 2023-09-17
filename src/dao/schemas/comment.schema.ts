import { Schema } from "mongoose";

export const CommentSchema = new Schema({
  commentId: String,
  postId: String,
  commentOwnerId: String,
  data: String,
  timestamp: Date,
  replyToId: String,
});
