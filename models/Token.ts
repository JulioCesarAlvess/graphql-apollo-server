import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Token {

    @Field()
    hash: string;

    @Field()
    mensagem: string;

}