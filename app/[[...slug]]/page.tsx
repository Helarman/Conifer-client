import getPageData from "../actions/getPageData";
import BlockManager from "../blockManager";
import { getDataDependencies } from "../blockManager/api";

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

  return (
    <div>
      <BlockManager sections={data.sections}/>
      <h1>{data.title}</h1>
    </div>
  );
}

export default Page;

function delve(json: any, arg1: string): any {
  throw new Error("Function not implemented.");
}
 