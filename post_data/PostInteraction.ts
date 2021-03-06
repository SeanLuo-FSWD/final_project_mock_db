class Comment {
  private _comment: string;
  private _date: string;
  constructor(comment: string, date: string) {
    this._comment = comment;
    this._date = date;
  }
}

class PostInteraction {
  private _comments: Comment[] = [];

  constructor(comment: Comment) {
    this._comments.push(comment);
  }
}

export { Comment, PostInteraction };
