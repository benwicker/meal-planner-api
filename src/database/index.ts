import { createConnection, getConnectionOptions } from "typeorm";
import Entities from './entities';

export const initializeDbConnection = async () => {
    // read connection options from ormconfig file (or ENV variables)
    const connectionOptions = await getConnectionOptions();

    // do something with connectionOptions,
    // for example append a custom naming strategy or a custom logger
    Object.assign(connectionOptions, { entities: Entities});

    // create a connection using modified connection options
    const connection = await createConnection(connectionOptions)
    .then(() => console.log("Connected"))
    .catch(() => console.log("Failed to connect to db"));
};
