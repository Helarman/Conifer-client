'use client'

import { useRouter } from "next/navigation";
import Header from "../header/header";
import { PostsProps } from "@/app/types";

interface BlogSectionProps {
    blogs:{
        data: PostsProps[]
    }
}

const BlogSection: React.FC<BlogSectionProps> = ({
    blogs
}) => {

    const router = useRouter();

    return (
        <div className="w-full">
            <div className="w-full px-4 mx-auto px-4">
                <div className="py-12">
                    <Header title="Blog Section" />
                    <div className="items-center flex flex-wrap -mx-4">
                    {blogs.data && blogs.data.map(({ id, attributes }) => (
                        <div 
                            key={id} 
                            onClick={() => router.push(`/blog/${id}`)}
                            className="p-0 pl-0 pr-0 px-4 relative w-full lg:w-3/12 overflow-hidden cursor-pointer">
                            <div 
                            
                                className="
                                    h-530-px
                                    relative 
                                    flex 
                                    flex-col 
                                    min-w-0 
                                    break-words 
                                    bg-white 
                                    w-full 
                                    transition-all 
                                    duration-150 
                                    ease-in-out 
                                    hover:z-1 
                                    hover:transform 
                                    hover:scale-110 group
                                "
                            >
                                <img  src={`http://localhost:1337${attributes.image.data.attributes.url}`} className="w-full h-full" alt="" />

                                <div className="absolute w-full h-full bg-black opacity-50 hover:opacity-0"></div>
                                <a href="#">
                                    <div className="absolute text-left p-6 bottom-0">
                                        <h5 className="text-2xl font-bold leading-tight mt-0 mb-2 text-white">{attributes.title}</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                        ))}
            
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BlogSection;