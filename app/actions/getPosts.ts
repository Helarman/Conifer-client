import axios from "axios";

interface IParams {
    slug?: string;
    page?: number | undefined
    size?: number | undefined
  }
  
  export default async function getPosts(
    params: IParams
  ) {
    try {

      let page = 1
      let size = 1
      
      if(params.page) {
        page = params.page
      }

      if(params.size) {
        size = params.size
      }

      const res = await axios.get(`http://127.0.0.1:1337/api/blogs?pagination[page]=${page}&pagination[pageSize]=${size}&populate=deep`);

      const posts = res.data.data;
      return { posts };
    } catch (error: any) {
      throw new Error(error);
    }
  }