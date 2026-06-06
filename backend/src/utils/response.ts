export const success = (payload: unknown) => ({ success: true, data: payload });
export const failure = (error: string | unknown) => ({ success: false, error });
