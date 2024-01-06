import getPageData from "../actions/getPageData";
import getPosts from "../actions/getPosts";
import BlockManager from "../blockManager";


interface IParams {
  slug?: string;
}

const Page = async ({ params }: { params: IParams }) => {

  const pageData = await getPageData(params)


  const data = pageData.pageData?.attributes

  if (!data) {
    return (
      <div>
        
        <h1>404</h1>
        <a href="/">to homepage</a>
      </div>
    );
  }

  return <BlockManager sections={data.sections}/>;
}

export default Page;

function delve(json: any, arg1: string): any {
  throw new Error("Function not implemented.");
}
 