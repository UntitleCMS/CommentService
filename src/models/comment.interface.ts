export interface IAddComment {
  data: string;
  replyToId?: string;
}

export interface ISynthComment extends IAddComment{
  postId: string;
  commentOwnerId: string;
  timestamp: Date;
}

export interface IComment extends ISynthComment {
  _id: string;
}
