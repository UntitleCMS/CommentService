import { Request, Response } from "express";
import { getCommentByPostId } from "../repositories/comment.repository";

export async function getCommentEndpoint(req: Request, res: Response) {
  console.log(
    `Get comments with ID ${req.params.commentId} from post ID: ${req.params.postId}`
  );

  getComment(req.params.postId, req.params.commentId)
    //   .then(mapType)
    .then((data) => res.json(data))
    .catch((err) => res.status(404).send(err));
}

async function getComment(postId: string, commentId: string) {
  return await getCommentByPostId(postId, commentId);
}

// async function mapType(from:any){

// }
