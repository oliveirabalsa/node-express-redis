import { transformAndValidate } from "class-transformer-validator";
import { Request, Response, NextFunction } from "express";

const isProd = process.env.NODE_ENV === "production";

function makeValidateBody<T>(
  c: T,
  whitelist = true,
  errorHandler?: (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) => void
) {
  return function ExpressClassValidate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const toValidate = req.body;
    if (!toValidate) {
      errorHandler && errorHandler({ type: "no-body" }, req, res, next);

      return res.status(400).json({
        error: true,
        message: "Validation failed",
        ...(isProd
          ? {}
          : { originalError: { message: "No request body found" } }),
      });
    }
    return transformAndValidate(c as any, toValidate, {
      validator: { whitelist },
    })
      .then((transformed) => {
        req.body = transformed;
        next();
      })
      .catch((err) => {
        errorHandler && errorHandler(err, req, res, next);
        return res.status(400).json({
          error: true,
          message: "Validation failed",
          ...(isProd ? {} : { originalError: err }),
        });
      });
  };
}

export { makeValidateBody };
