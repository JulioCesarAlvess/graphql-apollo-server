import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Client } from "../models/Client";
import { ClientMongo } from "../mongodb/models/Client";

@Resolver()
export class ClientResolver {
    @Query(() => [Client])
    async clients() {
        return await ClientMongo.find();
    }

    @Mutation(() => Client)
    async CreateClient(
        @Arg("name") name: string,
        @Arg("email") email: string,
        @Arg("cpf") cpf: string,
        @Arg("adress") adress: string,
        @Arg("tel") tel: string
    ) {
        return await ClientMongo.create({
            name, adress, cpf, email, tel
        })
    }
}