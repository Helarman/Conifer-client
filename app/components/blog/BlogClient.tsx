'use client'

import { useState } from "react"
import Header from "../header/header"
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { PostsProps, MetaProps } from "@/app/types";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Pagination from "./Pagination";
import { FirstBlogCard } from "./BlogCard";


interface BlogClientProps {
    posts: PostsProps[]
    meta: MetaProps
}



const BlogClient: React.FC<BlogClientProps> = ({ posts, meta }) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const page = Number(searchParams.get('page'))
  
    const [isPerPageDropdownOpen, setPerPageDropdownOpen] = useState(false)

    const togglePerPageDropdown = () => {
        setPerPageDropdownOpen(!isPerPageDropdownOpen)
    }


    return (
        <div className="w-full">
            <div className="py-12 pt-24 blog-3">
                <div className="container mx-auto px-4">
                    <Header title="Blog page" />

                    <div className="w-full flex">

                        <div>
                            <button
                                onClick={togglePerPageDropdown}
                                className="opacity-50 hover:opacity-75 py-4 lg:py-2 flex items-center text-xs uppercase font-semibold transition-all duration-150 ease-in-out text-blueGray-800"
                            >
                                Per page
                            </button>
                            <div
                                className={`${isPerPageDropdownOpen ? '' : 'hidden'} absolute bg-white text-base z-50 float-left p-2 border list-none text-left rounded shadow-lg `}
                                id="demo-dropdown"
                            >
                                <button
                                    onClick={() => { router.push(`/blog?size=5&page=1`) }}
                                    className="text-sm font-normal px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100">
                                    5
                                </button>
                                <button
                                    onClick={() => { router.push(`/blog?size=10&page=1`) }}
                                    className="text-sm font-normal px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100">
                                    10
                                </button>
                                <button
                                    onClick={() => { router.push(`/blog?size=25&page=1`) }}
                                    className="text-sm font-normal px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100">
                                    25
                                </button>
                                <button
                                    onClick={() => { router.push(`/blog?size=50&page=1`) }}
                                    className="text-sm font-normal px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100">
                                    50
                                </button>
                            </div>
                        </div>
                    </div>



                    {posts && posts.map(({ id, attributes }) => (
                        <div key={id}>
                            <FirstBlogCard 
                                id={id}
                                title={attributes.title} 
                                description={attributes.description} 
                                image={attributes.squarePreview.data.attributes.url}
                            />
                        </div>
                    ))}

                    <Pagination meta={meta} />

                </div>

            </div>


        </div >

    )
}

export default BlogClient;