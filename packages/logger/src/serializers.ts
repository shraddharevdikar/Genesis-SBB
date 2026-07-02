import pino from 'pino';

/**
 * Standard error serializer that formats error details, messages, nested structures,
 * stacks, and potential status codes consistently across the platform.
 */
export const errSerializer = (err: any) => {
  if (!err) return err;
  if (!(err instanceof Error)) {
    return err;
  }
  
  return {
    type: err.name || err.constructor?.name || 'Error',
    message: err.message,
    stack: err.stack,
    code: (err as any).code || (err as any).statusCode || undefined,
    details: (err as any).details || undefined,
  };
};

/**
 * Combined serializers block containing custom error formatting and standard
 * HTTP req/res formats for full-stack compatibility.
 */
export const serializers = {
  err: errSerializer,
  req: pino.stdSerializers.req,
  res: pino.stdSerializers.res,
};
