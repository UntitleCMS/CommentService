import { Router } from "express";
import { authGuard } from "../guard/auth.guard";

import { getCommentsEndpoint } from "./get-comments";
import { getCommentEndpoint } from "./get-comment";
import { addCommentEndpoint } from "./add-comment";
import { updateCommentEndpoint } from "./update-comment";
import { deleteCommentEndpoint } from "./delete-comment";

const router = Router();

router.get("/:postId", getCommentsEndpoint);

router.get("/:postId/:commentId", getCommentEndpoint);

router.post("/:postId", authGuard, addCommentEndpoint);

router.put("/:postId/:commentId", authGuard, updateCommentEndpoint);

router.delete("/:postId/:commentId", authGuard, deleteCommentEndpoint);

export default router;
