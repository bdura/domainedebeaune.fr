export type Post = {
  title: string;
  excerpt: string | undefined;
  date: string;
  body: string;
  image?: string;
  _path: string;
};
