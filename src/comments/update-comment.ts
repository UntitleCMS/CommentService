import { Request, Response } from "express";
import {
  getCommentByPostId,
  updateCommentFromPostId,
} from "../repositories/comment.repository";
import { IComment } from "../models/comment.interface";

export async function updateCommentEndpoint(req: Request, res: Response) {
  const updatingComment = await getCommentByPostId(
    req.params.postId,
    req.params.commentId
  );
  if (req.query.sub && req.query.sub === updatingComment?.commentOwnerId) {
    updateComment(req.params.postId, req.params.commentId, req.body)
      //   .then(mapType)
      .then((data) => res.json(data))
      .catch((err) => res.status(404).send(err));

    console.log(
      `Update comments with ID ${req.params.commentId} to post ID: ${req.params.postId}`
    );
  } else res.status(403).send({
    error: "Access Denied",
    msg: "You don't have permission to edit this comment"
  });
}

async function updateComment(
  postId: string,
  commentId: string,
  comment: IComment
) {
  return await updateCommentFromPostId(postId, commentId, comment.data);
}

// async function mapType(from:any){

// }
