"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const generator_utils_1 = require("./utils/generator.utils");
let pins = [];
let AppService = class AppService {
    Bm() {
        return "BoostMachine - Sempre no topo!!!";
    }
    genPin(authorization) {
        const token = authorization.replace("Bearer ", "").trim();
        if (token === process.env.BM_KEY) {
            const pin = (0, generator_utils_1.genPin)();
            pins.push(pin);
            (0, generator_utils_1.delPin)(pins);
            return pin;
        }
        return "Token invalido";
    }
    checkPin(pin) {
        if (!pins.includes(pin))
            return "false";
        return pin;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map