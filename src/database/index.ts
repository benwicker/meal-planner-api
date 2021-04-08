import { createConnection, getConnectionOptions, getConnection } from "typeorm";
import Entities from './entities';

export const initializeDbConnection = async () => {
    console.log("Setting up db connection");

    // read connection options from ormconfig file (or ENV variables)
    const connectionOptions = await getConnectionOptions();

    // do something with connectionOptions,
    // for example append a custom naming strategy or a custom logger
    Object.assign(connectionOptions, { "entities": Entities});

    // create a connection using modified connection options
    const connection = await createConnection(connectionOptions)
    .then(() => console.log("Connected"))
    .catch(err => console.log("Failed to connect to db", err));
};

export const closeDbConnection = async () => {
    const connection = getConnection();
    connection.close();
}