import { ISynthComment } from "../models/comment.interface";
import { CommentModel } from "../dao/comment.model";

export async function getCommentsByPostId(postId: string) {
  return await CommentModel.find({ postId: postId });
}

export async function getCommentByPostId(postId: string, commentId: string) {
  return await CommentModel.findOne({ postId: postId, _id: commentId });
}

export async function addComment(comment: ISynthComment) {
  return await CommentModel.insertMany(comment);
}

export async function removeCommentFromPostId(
  postId: string,
  commentId: string
) {
  const deletingComment = await CommentModel.findOneAndDelete({
    postId: postId,
    _id: commentId,
  });

  await CommentModel.deleteMany({
    replyToId: deletingComment?._id,
  });

  return deletingComment;
}

export async function updateCommentFromPostId(
  postId: string,
  commentId: string,
  newComment: string
) {
  return await CommentModel.findOneAndUpdate(
    { postId: postId, _id: commentId },
    { $set: { data: newComment, timestamp: new Date() } },
    { new: true }
  );
}
