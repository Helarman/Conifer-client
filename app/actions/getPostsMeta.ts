import axios from "axios";

export default async function getPostsMeta() {
  try {

    const res = await axios.get(`http://127.0.0.1:1337/api/blogs?populate=*`);

    const meta = res.data.meta;
    return { meta };
  } catch (error: any) {
    throw new Error(error);
  }
}