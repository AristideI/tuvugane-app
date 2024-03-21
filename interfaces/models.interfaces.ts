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
