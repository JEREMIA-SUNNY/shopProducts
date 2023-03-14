import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../common/utils/auth";

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.cookies["access-token"];
  if (!token) {
    return res.status(401).json({
      error: "Unauthorized Request",
    });
  }
  const { productid, currency, iconpic } = req.body;
  console.log(productid, currency, iconpic);

  const data = await api.post(
    `/order/create`,
    {
      productid,
      currency,
      iconpic,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(data.status);

  if (data.status === 201) {
    return res.status(201).json({ result: data.data });
  }
  return res.status(501).json("Error while placing order");
};
export default Handler;
