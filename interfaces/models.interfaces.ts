export interface User {
  fullname: string;
  username: string;
  email: string;
  profilePic: string;
  password: string;
  gender: string;
}

export interface UserResp {
  _id: string;
  fullname: string;
  username: string;
  email: string;
  profilePic: string;
  gender: string;
  bio: string;
}

export interface Comment {
  _id: string;
  content: string;
  user: UserResp;
}

export interface CreatePostDTO {
  content: string;
  image: string;
}

export interface PostResp {
  _id: string;
  content: string;
  image: string;
  likes: string[];
  comments: Comment[];
  user: UserResp;
}
