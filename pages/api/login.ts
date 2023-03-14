import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../common/utils/auth";
import cookie from "cookie";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { login, password, tenant } = req.body;

    const { data } = await api.post("/auth/signin", {
      login,
      password,
      tenant,
    });

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("access-token", data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 2,
        path: "/",
      })
    );
    return res.status(201).json({
      message: "Log In Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Something went  wrong cant sign in",
    });
  }
};
export default handler;
