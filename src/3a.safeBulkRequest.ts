import { errorResult, okayResult, Result } from './3b.result';
import { postToUnreliableService, Request, Response } from './2b.unreliable';

async function safePostToUnreliableService(
  req: Request,
): Promise<Result<Response>> {
  let result;
  try {
    result = await postToUnreliableService(req);
  } catch (e) {
    return errorResult(`Failed to post ${req.id}: ${(e as Error).message}`);
  }
  return okayResult(result);
}

async function main() {
  const requests = [{
    id: 'id1',
  }, {
    id: 'id2',
  }];

  const results = await Promise.all(requests.map(safePostToUnreliableService));
  const successes: Response[] = [];
  const failures: string[] = [];
  results.forEach((res) => {
    if (res.ok) {
      successes.push(res.value);
    } else {
      failures.push(res.error);
      // failures.push(res.value);
    }
  });
  console.log('successes:', successes);
  console.log('failures:', failures);
}

main()
