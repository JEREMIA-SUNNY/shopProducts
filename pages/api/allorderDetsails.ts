import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../common/utils/auth";

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req?.cookies["access-token"];
  if (!token) {
    return res.status(401).json({
      error: "Unauthorized Request",
    });
  }
  try {
    const { data } = await api.get("/order/orderOfUsers", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(501).json(error);
  }
};
export default Handler;
