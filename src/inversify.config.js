"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const types_1 = require("./types");
let container = new inversify_1.Container();
container.bind(types_1.TYPES.CryptKey).toConstantValue(process.env.CRYPT_KEY);
exports.default = container;
//# sourceMappingURL=inversify.config.js.map