import { Request, Response } from "express";
import { getCommentsByPostId } from "../repositories/comment.repository";

export async function getCommentsEndpoint(req: Request, res: Response) {
  console.log(`Get all comments from post ID: ${req.params.postId}`);

  getComment(req.params.postId)
    // .then(mapType)
    .then((data) => res.json(data))
    .catch((err) => res.status(404).send(err));
}

async function getComment(postId: string) {
  return await getCommentsByPostId(postId);
}

// async function mapType(from: any) {
//   return from;
  
// }
