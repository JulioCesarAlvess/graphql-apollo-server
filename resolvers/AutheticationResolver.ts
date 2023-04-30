import axios from "axios";
import { GraphQLError } from "graphql/error";
import { Arg, Query, Resolver } from "type-graphql";
import { Token } from "../models/Token";
require("dotenv").config({ path: ".env.local" });
const AUTH_BASE_URL = process.env.AUTHENTICATION_URL;

@Resolver()
export class AutheticationResolver {
  @Query(() => Token)
  async Authentication(@Arg("usuario") usuario: string) {
    try {
      const response = await axios.get(
        `${AUTH_BASE_URL}/authentication/${usuario}`
      );
      const result: Token = {
        hash: response.data.token,
        mensagem: "Usuário autenticado com sucesso",
      };
      return result;
    } catch (err) {
      throw new GraphQLError(
        `Erro ao efetuar autenticação, faça login novamente: ${err}`
      );
    }
  }
}
