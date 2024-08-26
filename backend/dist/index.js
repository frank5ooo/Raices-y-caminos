"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./src/server"));
const logger_1 = require("./src/utils/logger");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = 3000;
server_1.default.listen(port, () => {
    (0, logger_1.LogSucces)(`[server ON]: running in http://localhost:${port}/api`);
});
server_1.default.on('error', (error) => {
    (0, logger_1.LogError)(`[server Error]: ${error}`);
});
//# sourceMappingURL=index.js.map