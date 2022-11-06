import { Response, Request } from "express";

export const LoginAuthController = (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Login page loaded successfully",
  });
};

export const SignUpAuthController = (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  res.status(200).json({
    status: "success",
    email: email,
    username: username,
    password: password,
  });
};
