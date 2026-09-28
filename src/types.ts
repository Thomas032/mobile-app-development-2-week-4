// Shape of one post from https://dummyjson.com/posts
export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export type RootStackParamList = {
  Posts: undefined;
  PostDetails: { post: Post };
};
