"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const about_json_1 = __importDefault(require("../about.json"));
const router = (0, express_1.Router)();
router.get("/about", (req, res) => {
    res.json(about_json_1.default);
});
exports.default = router;
