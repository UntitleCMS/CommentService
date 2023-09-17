import { Request, Response } from "express";
import { addComment } from "../repositories/comment.repository";
import { IAddComment, ISynthComment } from "../models/comment.interface";

export async function addCommentEndpoint(req: Request, res: Response) {
  console.log(`Add comments to post ID: ${req.body.postId}`);

  addCommentBy(req.params.postId, req.query.sub as string, req.body)
    // .then(mapType)
    .then((data) => res.json(data))
    .catch((err) => res.status(404).send(err));
}

async function addCommentBy(
  postId: string,
  ownerId: string,
  comment: IAddComment
) {
  const newComment: ISynthComment = {
    ...comment,
    postId: postId,
    commentOwnerId: ownerId,
    timestamp: new Date(),
  };
  return await addComment(newComment);
}

// async function mapType(from: any) {

// }
