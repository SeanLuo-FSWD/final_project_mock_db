export default class PostContent {
  private _title: string;
  private _description: string;
  private _image_src: string;
  private _likes: number;

  constructor(
    title: string,
    description: string,
    image_src: string,
    likes: number
  ) {
    this._title = title;
    this._description = description;
    this._image_src = image_src;
    this._likes = likes;
  }
}
