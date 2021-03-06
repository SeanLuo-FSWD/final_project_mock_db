import PostMeta from "./post_data/PostMeta";
import PostContent from "./post_data/PostContent";
import { PostInteraction } from "./post_data/PostInteraction";

export default class Post {
  private _meta: PostMeta;
  private _content: PostContent;
  private _interaction: PostInteraction;

  constructor(
    meta: PostMeta,
    content: PostContent,
    interaction: PostInteraction
  ) {
    this._meta = meta;
    this._content = content;
    this._interaction = interaction;
  }
}
