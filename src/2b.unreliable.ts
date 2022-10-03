export type Request = {
  id: string,
};

export type Response = {
  id: string,
  value: string,
};

export async function postToUnreliableService(req: Request): Promise<Response> {
  if (req.id == 'id1') {
    throw new Error("I'm not feeling well today");
  } else {
    return { id: req.id, value: 'great success!' };
  }
}
