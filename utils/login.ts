import axios from "axios";
import { SERVER } from "../env";

export async function authLogin({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const user = await axios.post(`${SERVER}auth/login`, {
      username,
      password,
    });
    console.log(user);
    console.log(user.data);
    return user.data;
  } catch (error) {
    console.log(error);
  }
}
