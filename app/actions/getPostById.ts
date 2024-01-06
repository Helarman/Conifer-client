import axios from "axios";

interface IParams {
    slug?: string;
  }
  
  export default async function getPostById(
    params: IParams
  ) {
    try {
      const res = await axios.get(`http://127.0.0.1:1337/api/blogs/${params.slug}`);

      const post = res.data.data;
      return { post };
    } catch (error: any) {
      throw new Error(error);
    }
  }