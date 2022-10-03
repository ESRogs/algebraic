"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postToUnreliableServer = void 0;
async function postToUnreliableServer(req) {
    throw new Error("I'm not feeling well today");
}
exports.postToUnreliableServer = postToUnreliableServer;
