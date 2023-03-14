import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../common/utils/auth";

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req?.cookies["access-token"];

  if (!token) {
    return res.status(401).json({
      error: "Unauthorized Request",
    });
  }
  const id = req.query.id;
  console.log(id, "this is id");
  try {
    const { data } = await api.get(`/products/${req.query.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.status(201).json(data);
  } catch (error) {
    return res.status(501).json(error);
  }
};
export default Handler;
