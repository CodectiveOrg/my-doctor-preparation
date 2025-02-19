type Result<T> = [error: null, data: T] | [error: string, data: null];

export async function parseBody<T>(request: Request): Promise<Result<T>> {
  try {
    const body = await request.json();
    return [null, body];
  } catch (e) {
    if (e instanceof Error) {
      return [e.message, null];
    }

    if (typeof e === "string") {
      return [e, null];
    }

    return ["Unknown error", null];
  }
}
