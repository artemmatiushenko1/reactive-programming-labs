type TPostConstructor = {
  id: string;
  title: string;
  content: string;
};

class Post {
  id: string;
  title: string;
  content: string;

  constructor({ id, title, content }: TPostConstructor) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}

export { Post };
