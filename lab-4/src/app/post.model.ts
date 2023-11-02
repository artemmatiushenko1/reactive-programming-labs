type TPostConstructor = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
};

class Post {
  id: string;
  title: string;
  content: string;
  createdAt: Date;

  constructor({ id, title, content, createdAt }: TPostConstructor) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
  }
}

export { Post };
