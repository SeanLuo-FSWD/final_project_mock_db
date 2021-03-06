import Post from "./Post";
import * as json_obj from "./fake_data.json";
import PostContent from "./post_data/PostContent";
import { PostInteraction, Comment } from "./post_data/PostInteraction";
import PostMeta from "./post_data/PostMeta";

let post1_content = new PostContent(
  json_obj.PostContents_title,
  json_obj.PostContents_description,
  json_obj.PostContents_image_src,
  json_obj._likes
);

let comment1 = new Comment(json_obj.comment, json_obj.comment_date);

let postInteraction1 = new PostInteraction(comment1);

let postMeta1 = new PostMeta(json_obj.post_date, json_obj.name);

let post1 = new Post(postMeta1, post1_content, postInteraction1);

let feed: Post[] = [];

feed.push(post1);

console.log("Donnneeeee");

console.log(feed);

console.log("voilaaaaa");
