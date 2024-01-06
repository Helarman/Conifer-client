'use client'
import { MetaProps } from "@/app/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";



interface PaginationProps {
    meta: MetaProps
}

const Pagination: React.FC<PaginationProps> = ({
    meta
}) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    let page = Number(searchParams.get('page'))
    let size = Number(searchParams.get('size'))

    if(page == 0){
        page = 1
    }

    if(size == 0){
        size = 5
    }

    const pageQuantity =Math.ceil(meta.pagination.total / size) 

    const changePage = (pageNum: Number) => {
        router.push(`/blog?size=${size}&page=${pageNum}`)
    }

    const changePageToPrevious = () => {
        if (page != 1) {
            changePage(page - 1)
        }
    }
    const changePageToNext = () => {
        if (page != pageQuantity) {
            changePage(page + 1)
        }
    }

    const Dots = () => {
        return (
            <p
                className={`
                    text-sm 
                    font-medium 
                    leading-none 
                    cursor-default 
                    text-gray-600  
                    pt-3 
                    mr-4 
                    px-2
                `}
            >
                ...
            </p>
        )
    }
    const Button = ({ pageNum }: { pageNum: number }) => {
        return (
            <button
                onClick={() => changePage(pageNum)}
                className={`
                        ${page === pageNum ? 'text-indigo-700 border-indigo-400' : 'text-gray-600 hover:text-indigo-700 hover:border-indigo-400 border-transparent'}
                        text-sm 
                        font-medium 
                        leading-none 
                        cursor-pointer 
                        text-gray-600 h
                        border-t 
                        pt-3
                        mr-4 
                        px-2
                    `}
            >
                {`${pageNum}`}
            </button>
        )
    }

    const Left = () => {
        return (
            <>
                {pageQuantity > 2 ? <Button pageNum={1} /> : ''}
                {pageQuantity > 3 ? <Button pageNum={2} /> : ''}
                {pageQuantity > 4 ? <Button pageNum={3} /> : ''}
                {pageQuantity > 5 ? <Button pageNum={4} /> : ''}
                {pageQuantity > 6 ? <Button pageNum={5} /> : ''}
                {pageQuantity < 8 ? <Button pageNum={pageQuantity - 1} /> : <Dots />}
                <Button pageNum={pageQuantity} />
            </>
        )
    }

    const Center = () => {
        return (
            <>
                <Button pageNum={1} />
                <Dots />
                <Button pageNum={page - 1} />
                <button
                    className={`
                        text-indigo-700 
                        border-indigo-400
                        text-sm 
                        font-medium 
                        leading-none 
                        cursor-pointer 
                        text-gray-600 h
                        border-t 
                        pt-3
                        mr-4 
                        px-2
                    `}
                >
                    {page}
                </button>
                <Button pageNum={page + 1} />
                <Dots />
                <Button pageNum={pageQuantity} />
            </>
        )
    }

    const Right = () => {
        return (
            <>
                <Button pageNum={1} />
                <Dots />
                <Button pageNum={pageQuantity - 4} />
                <Button pageNum={pageQuantity - 3} />
                <Button pageNum={pageQuantity - 2} />
                <Button pageNum={pageQuantity - 1} />
                <Button pageNum={pageQuantity} />
            </>
        )
    }

    return (
        <div
            className={`
                ${pageQuantity < 2 ? 'hidden' : 'flex'} 
                w-full 
                flex 
                items-center 
                justify-center 
                py-10 
                lg:px-0 
                sm:px-6 
                px-4
            `}
        >
            <div
                className="
                    w-full 
                    flex 
                    items-center 
                    justify-between 
                    border-t 
                    border-gray-200
                "
            >
                <button
                    onClick={changePageToPrevious}
                    className={`
                        ${page === 1 ? 'text-gray-300 cursor-default' : 'text-gray-600 hover:text-indigo-700 cursor-pointer'}
                        flex 
                        items-center 
                        pt-3 
                    `}
                >
                    <BsArrowLeft />
                    <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                </button>

                <div className={`sm:flex hidden`}>
                    {page < 5 || pageQuantity < 8 ? <Left /> : ''}
                    {page > 4 && page < pageQuantity - 3 ? <Center /> : ''}
                    {page > pageQuantity - 4 && pageQuantity > 7 ? <Right /> : ''}
                </div>

                <button
                    onClick={changePageToNext}
                    className={`
                            ${page === pageQuantity ? 'text-gray-300 cursor-default' : 'text-gray-600 hover:text-indigo-700 cursor-pointer'}
                            flex 
                            items-center 
                            pt-3 
                        `}
                >
                    <p className="text-sm font-medium leading-none mr-3">Next</p>
                    <BsArrowRight />
                </button>
            </div>
        </div >
    )
}

export default Pagination;
