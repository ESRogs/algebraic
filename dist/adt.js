"use strict";
// What's in a name?
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_1 = require("./wallet");
await Promise.all();
async function postLedgerEntry(traderId, tokenCode, amount) {
    const req = (0, wallet_1.createLedgerEntryRequest)(traderId, tokenCode, amount);
    let ledgerEntryId;
    try {
        ledgerEntryId = await (0, wallet_1.postToWallet)(req);
    }
    catch (e) {
        return { ok: false, error: e };
    }
    return { ok: true, value: ledgerEntryId };
}
// product types - multiplying two sets
// AND types
