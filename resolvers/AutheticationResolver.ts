import axios from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { Status } from "../models/Status";
require("dotenv").config({ path: ".env.local" });
const AUTH_BASE_URL = process.env.AUTHENTICATION_URL;

@Resolver()
export class AutheticationResolver {
  @Query(() => Status)
  async Authentication(@Arg("token") token: string) {
    try {
      await axios.get(`${AUTH_BASE_URL}/auth/${token}`);
      const result: Status = {
        status: 200,
      };
      return result;
    } catch (err) {
      const error: Status = {
        status: 403,
      };
      return error;
    }
  }
}
