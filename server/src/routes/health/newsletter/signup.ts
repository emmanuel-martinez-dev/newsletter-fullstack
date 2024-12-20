import { Request, Response } from "express";
import { isEmailValid } from "../../utils/email";

interface SignupPayload {
  email?: string;
}

export const signupHandler =
  () => async (request: Request, response: Response) => {
    try {
      // 1. get the email from the request
      const { email = "" } = request.body as SignupPayload;

      // 2. validate the email
      if (!email) {
        throw new Error("Email is required");
      }

      if (!isEmailValid(email)) {
        throw new Error("Email is invalid");
      }
      // ...

      return response.status(200).json({ status: "ok" });
    } catch (error) {
      throw new Error();
    }
  };
