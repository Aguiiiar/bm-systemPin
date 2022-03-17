"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delPin = exports.genPin = void 0;
function genPin() {
    let pin = "";
    let gen = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@";
    for (let i = 0; i < 10; i++) {
        pin += gen.charAt(Math.floor(Math.random() * gen.length));
    }
    return pin;
}
exports.genPin = genPin;
function delPin(pins) {
    const pin = pins;
    setTimeout(() => {
        pin.splice(0, Number.MAX_VALUE);
        console.log("Deletei tudo");
    }, 30000);
}
exports.delPin = delPin;
//# sourceMappingURL=generator.utils.js.map