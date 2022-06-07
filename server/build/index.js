"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json({
    limit: "30mb",
})); //middleware que transforma req.body a un json
app.use(express_1.default.urlencoded({ limit: "30mb", extended: true }));
app.use((0, cors_1.default)({ origin: process.env.CORS_ORIGIN, credentials: true }));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Connection is established and is running on port: ${PORT}`);
});
exports.default = app;
