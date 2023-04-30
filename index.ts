import { ApolloServer } from "apollo-server";
import path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
/* import "./mongodb/connect"; */
import { AutheticationResolver } from "./resolvers/AutheticationResolver";
import { LoginResolver } from "./resolvers/LoginResolver";
require("dotenv").config({ path: ".env.local" });

async function main() {
  const schema = await buildSchema({
    resolvers: [LoginResolver, AutheticationResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });
  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();
  console.log("server runing on ", url);
}

main();
