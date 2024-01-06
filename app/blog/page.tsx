import axios from "axios";
import getPosts from "../actions/getPosts"
import getPostsMeta from "../actions/getPostsMeta";
import BlogClient from "../components/blog/BlogClient";
import { PostsProps, MetaProps } from "@/app/types";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


interface IParams {
    slug?: string;
    page?: number
    size?: number
}

async function getPageData() {
    try {

        const res = await axios.get(`http://127.0.0.1:1337/api/blog-page?populate=deep`);

        const pageData = res.data.data;

        return { pageData };
    } catch (error: any) {
        throw new Error(error);
    }
}

const BlogPage = async ({ searchParams }: { searchParams: IParams }) => {

    const posts = await getPosts(searchParams)
    const meta = await getPostsMeta()
    const pageData = await getPageData()
    return (
        <div>
            <Navbar 
                type={pageData.pageData.attributes.navbar.type} 
                textColor={pageData.pageData.attributes.navbar.textColor} 
                backgroundColor={pageData.pageData.attributes.navbar.backgroundColor} 
                logo={pageData.pageData.attributes.navbar.logo} 
                links={pageData.pageData.attributes.navbar.links}
            />

            <BlogClient posts={posts.posts} meta={meta.meta} />
            
            <Footer 
                companyName={pageData.pageData.attributes.footer.companyName} 
                withBorder={pageData.pageData.attributes.footer.withBorder} 
                textColor={pageData.pageData.attributes.footer.textColor} 
                backgroundColor={pageData.pageData.attributes.footer.backgroundColor} 
                links={pageData.pageData.attributes.footer.links}
                small={pageData.pageData.attributes.footer.small}
            />

        </div>
    )
}

export default BlogPage;