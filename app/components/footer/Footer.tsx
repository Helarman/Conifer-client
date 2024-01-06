'use client'

import { useRouter } from "next/navigation"
import { LinkProps } from "@/app/types"
import Icon from "../Icon"

interface FooterProps {
    companyName: string
    backgroundColor: string
    textColor: string
    withBorder: boolean
    small?: boolean
    title?: string
    description?: string
    links: LinkProps[]
    socials?: any[]

}

const Footer: React.FC<FooterProps> = ({
    companyName,
    backgroundColor,
    textColor,
    withBorder,
    links,
    socials,
    title,
    description,
    small
}) => {
    if (small) {
        return <MinFooter companyName={companyName} backgroundColor={backgroundColor} textColor={textColor} withBorder={withBorder} links={links} />
    }
    return <LargeFooter title={title} description={description} socials={socials} companyName={companyName} backgroundColor={backgroundColor} textColor={textColor} withBorder={withBorder} links={links} />
}

const LargeFooter: React.FC<FooterProps> = ({
    title,
    description,
    companyName,
    backgroundColor,
    textColor,
    links,
    socials
}) => {
    const router = useRouter()
    const year = new Date().getFullYear();

    return (
        <footer style={{
            background: backgroundColor,
            color: textColor
        }}>
            <div className="relative pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex items-center   ">
                        <div className="w-full lg:w-6/12 text-center lg:text-left">
                            <h4 className="text-xl mt-4 font-bold">
                                {title}
                            </h4>
                            <h5 className="mt-1 mb-2 w-8/12">
                                {description}
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                {socials && socials.map(({ id, link, icon, iconColor, iconBackground }) => (

                                    <a 
                                        key={id}
                                        style={{background: iconBackground}}
                                        href={link}
                                        target="_blank"
                                        className="
                                            items-center
                                            justify-center
                                            rounded-full
                                            hover:opacity-75
                                            h-10    
                                            w-10
                                            outline-none 
                                            focus:outline-none 
                                            mr-2 
                                            inline-flex
                                        "
                                        type="button"
                                    >
                                        <Icon size={30} icon={icon} color={iconColor}/>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-6/12 text-left">
                            <div className="w-full text-left flex justify-end">
                                <ul style={{ columns: Math.ceil(links.length / 5) }}>
                                    {links && links.map(({ id, label, href, isExternal }) => (
                                        <li key={id} className="flex justify-end">
                                            {isExternal ?
                                                <a
                                                    href={href}
                                                    target="_blank"
                                                    className="
                                                            hover:opacity-75 
                                                            block 
                                                            pb-2 
                                                            pr-10 
                                                            text-sm
                                                        "
                                                >
                                                    {label}
                                                </a>
                                                :
                                                <button
                                                    onClick={() => router.push(href)}
                                                    className="
                                                            hover:opacity-75 
                                                            block 
                                                            pb-2 
                                                            pr-10 
                                                            text-sm
                                                        "
                                                >
                                                    {label}
                                                </button>
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8" />

                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div
                            className="
                                text-center 
                                xl:text-left 
                                text-sm 
                            "
                        >
                            Copyright © {year}

                            <span className="font-semibold ml-1">
                                {companyName}.
                            </span>

                            All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const MinFooter: React.FC<FooterProps> = ({
    companyName,
    backgroundColor,
    textColor,
    links,
    withBorder
}) => {
    const router = useRouter()

    const year = new Date().getFullYear();

    return (
        <footer
            style={{
                background: backgroundColor,
                color: textColor
            }}
        >
            <div
                className="
                    w=
                    container 
                    mx-auto 
                    px-4
                "
            >
                {withBorder ? <hr className="border-b-1 border-gray-200"></hr> : ''}
                <div
                    className="
                        items-center 
                        xl:justify-between 
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
                            xl:w-6/12 
                            w-full 
                            sm:w-full
                        "
                    >
                        <div
                            className="
                                text-center 
                                xl:text-left 
                                py-6 
                                text-sm 
                            "
                        >
                            Copyright © {year}

                            <span className="font-semibold ml-1">
                                {companyName}.
                            </span>

                            All rights reserved.
                        </div>
                    </div>

                    <div
                        className="
                            px-4 
                            relative 
                            w-full 
                            xl:w-6/12 
                            w-full 
                            sm:w-full
                        "
                    >
                        <ul
                            className="
                                justify-center 
                                xl:justify-end 
                                mx-auto 
                                flex 
                                flex-wrap 
                                list-none 
                                pl-0 
                                mb-0
                            "
                        >
                            {links && links.map(({ id, label, href, isExternal }) => (
                                <li key={id}>
                                    {isExternal ?
                                        <a
                                            href={href}
                                            target="_blank"
                                            className="
                                                text-sm 
                                                block 
                                                px-4 
                                                bg-transparent 
                                                no-underline  
                                                hover:opacity-75 
                                                py-4 
                                                md:py-6 
                                                mx-auto
                                            "
                                        >
                                            {label}
                                        </a>
                                        :
                                        <button
                                            onClick={() => router.push(href)}
                                            className="
                                                text-sm 
                                                block 
                                                px-4 
                                                bg-transparent 
                                                no-underline  
                                                hover:opacity-75 
                                                py-4 
                                                md:py-6 
                                                mx-auto
                                            "
                                        >
                                            {label}
                                        </button>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>


    )
}

export default Footer;