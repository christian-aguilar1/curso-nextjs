import { NextApiRequest, NextApiResponse } from "next";

import DB from '@database';

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const len = allEntries.length;

  response.status(200).json({ length: len, data: allEntries })
}

export default allAvos;
