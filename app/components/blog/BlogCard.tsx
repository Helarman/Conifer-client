'use client'

import { useRouter } from "next/navigation";

interface BlogCardProps {
    id?: number;
    image?: string;
    title?: string;
    description?: string;
}
export const FirstBlogCard: React.FC<BlogCardProps> = ({
    id,
    image,
    title,
    description
}) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/blog/${id}`)}
            className="
                cursor-pointer
                mb-12 
                relative 
                flex 
                flex-col 
                min-w-0 
                break-words 
                bg-white 
                w-full 
                mb-6
                shadow-lg 
                rounded-lg
            "
        >
            <div 
                className="
                    items-center 
                    flex 
                    flex-wrap 
                    -mx-4
                "
            >
                <div 
                    className=" 
                        px-4 
                        relative 
                        w-full 
                        lg:w-4/12
                    "
                >
                    <img 
                        src={`http://localhost:1337${image}`} 
                        className="
                            w-full 
                            rounded-l-lg 
                            rounded-r-noneaspect-square  
                        " 
                        alt="..." 
                    />
                </div>
                <div 
                    className="
                        px-4 
                        relative 
                        w-full 
                        lg:w-8/12
                    "
                >
                    <div 
                        className="
                            lg:pl-0 
                            px-4 
                            py-5 
                            flex-auto
                        "
                    >
                        <h3 
                            className="
                                text-3xl
                                font-semibold 
                                text-gray-700 
                                leading-tight
                            "
                        >
                            {title}
                        </h3>

                        <p 
                            className="
                                mt-3 
                                text-lg 
                                leading-relaxed 
                                text-blueg-500
                            "
                        >
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}