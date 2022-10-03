"use strict";
async function makeRequests(reqs) {
    await Promise.all(reqs.map(postToUnreliableService));
}
async function main() {
    const requests = [{
            id: 'asdf1',
        }, {
            id: 'asdf2',
        }];
    const results = await makeRequests(requests);
}
