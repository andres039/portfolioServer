"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const about_1 = __importDefault(require("./routers/about"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const allowedOrigins = ["http://localhost:3000", "https://www.andresbeltran.dev"];
app.use((0, cors_1.default)({
    origin: allowedOrigins,
}));
app.use("/api", (0, cors_1.default)({
    origin: allowedOrigins,
}), about_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
