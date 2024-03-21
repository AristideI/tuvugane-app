import axios from "axios";
import { SERVER } from "../env";
import { User } from "../interfaces/models.interfaces";

export async function signup({
  fullname,
  username,
  email,
  gender,
  profilePic,
  password,
}: User) {
  try {
    const user = await axios.post(`${SERVER}auth/signup`, {
      fullname,
      username,
      email,
      gender,
      profilePic,
      password,
    });

    return user.data.data.user as User;
  } catch (error) {
    console.log(error);
  }
}
