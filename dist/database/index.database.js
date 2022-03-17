"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = (async () => {
    try {
        await (0, mongoose_1.connect)(process.env.MONGO);
        console.log("Conectado");
    }
    catch (error) {
        console.log(error);
    }
})();
//# sourceMappingURL=index.database.js.map