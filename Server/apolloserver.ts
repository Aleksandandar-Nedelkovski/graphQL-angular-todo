import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import * as path from "path";
import { buildSchema } from "type-graphql";
import { TodoItemResolver } from "./graph/TodoItemResolver";
import { Prefill } from "./graph/Prefill";
import { Mongo } from "./database/Database";
import { GraphQLSchema } from "graphql";

export class MyApp {

  constructor(private mongo: Mongo = new Mongo(),
  ) { }

  public async Start(): Promise<void> {
    this.mongo.Connect();

    const schema: GraphQLSchema = await buildSchema({
      resolvers: [TodoItemResolver],
      validate: false,
      emitSchemaFile: path.resolve(__dirname, 'apolloschema.gql')
    });

    await Prefill.Instance.Populate();

    const server = new ApolloServer({ schema, playground: true });
    await server.listen(3000);
  }
}

new MyApp().Start();