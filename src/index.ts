import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import mikroOrmConfig from "./mikro-orm.config";
import express from 'express';
import { ApolloServer} from 'apollo-server-express';

const main = async () => {
    const orm = await MikroORM.init(mikroOrmConfig);
    await orm.getMigrator().up();
    
    const app = express();

    

    app.listen(4000, () => {
        console.log("server started on localhost:4000")
    })
}


main().catch(err => {
    console.log(err);
});

