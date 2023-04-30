import axios from "axios";
import { GraphQLError } from "graphql/error";
import { Arg, Mutation, Resolver } from "type-graphql";
import { Token } from "../models/Token";
require("dotenv").config({ path: ".env.local" });
const AUTH_BASE_URL = process.env.AUTH_URL;

@Resolver()
export class LoginResolver {
  @Mutation(() => Token)
  async Login(@Arg("usuario") usuario: string, @Arg("senha") senha: string) {
    try {
      const response = await axios.post(`${AUTH_BASE_URL}/login`, {
        usuario,
        senha,
      });
      const result: Token = {
        hash: response.data.token,
        mensagem: "Usuário logado com sucesso",
      };
      return result;
    } catch (err) {
      throw new GraphQLError(`Erro ao efetuar login: ${err}`);
    }
  }
}
