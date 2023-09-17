import { Request, Response } from "express";
import {
  getCommentByPostId,
  removeCommentFromPostId,
} from "../repositories/comment.repository";

export async function deleteCommentEndpoint(req: Request, res: Response) {
  console.log(
    `Delete comments with ID ${req.params.commentId} to post ID: ${req.params.postId}`
  );

  let deletingComment = await getCommentByPostId(
    req.params.postId,
    req.params.commentId
  );

  if (req.query.sub && req.query.sub === deletingComment?.commentOwnerId) {
    deleteComment(req.params.postId, req.params.commentId)
      //   .then(mapType)
      .then((data) => res.json(data))
      .catch((err) => res.status(404).send(err));
  } else
    res.status(403).send({
      error: "Access Denied",
      msg: "You don't have permission to delete this comment",
    });
}

async function deleteComment(postId: string, commentId: string) {
  return await removeCommentFromPostId(postId, commentId);
}

// async function mapType(from:any){

// }
