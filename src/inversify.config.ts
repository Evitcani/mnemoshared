import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";

let container = new Container();

container.bind<string>(TYPES.CryptKey).toConstantValue(process.env.CRYPT_KEY);

export default container;