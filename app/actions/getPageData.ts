import axios from "axios";

interface IParams {
    slug?: string;
  }
  
  export default async function getPageData(
    params: IParams
  ) {
    try {
      const { slug } = params;

      let query

      if(!slug) {
        query = `[$notNull]`
      }
      else{
        query = `[$eq]=${slug}`
      }


      const res = await axios.get(`http://127.0.0.1:1337/api/pages?filters[slug]${query}&populate=deep`);

      const pageData = res.data.data[0];
      return { pageData };
    } catch (error: any) {
      throw new Error(error);
    }
  }