import { postToUnreliableService } from './2b.unreliable';

async function main() {
  const requests = [{
    id: 'id1',
  }, {
    id: 'id2',
  }];

  const results = await Promise.all(requests.map(postToUnreliableService));
  console.log('results:', results);
}

main()
