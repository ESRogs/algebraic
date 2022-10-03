type OkayResult<T> = { ok: true, value: T };
type ErrorResult<E> = { ok: false, error: E };
export type Result<T, E = string> = OkayResult<T> | ErrorResult<E>

// Bad
// type RResult<T, E> = {
//   ok: boolean,
//   value?: T,
//   error?: E,
// }

export const okayResult = <T>(value: T): OkayResult<T> => ({ ok: true, value });
export const errorResult = <E>(error: E): ErrorResult<E> => ({ ok: false, error });
