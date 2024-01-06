'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

interface PositionsProps {
    default: 'absolute'
    fixed: 'fixed'
    colorOnScroll: 'fixed'
}


interface LinkProps {
    id: number
    attributes: {
        label: string
        href: string
    };
}

interface NavbarProps {
    type: string
    textColor: string
    backgroundColor: string
    logo: any
    links: {
        data: LinkProps[]
    }
}

const Navbar: React.FC<NavbarProps> = ({
    type,
    textColor,
    backgroundColor,
    logo,
    links
}) => {
    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const positions: PositionsProps = {
        default: 'absolute',
        fixed: 'fixed',
        colorOnScroll: 'fixed'
    }

    const position = positions[type as keyof PositionsProps]

    const [scroll, setScroll] = useState(false);

    const listenScrollEvent = () => {
        window.scrollY < 70 ? setScroll(false) : setScroll(true)
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

  

    const scrollBackground = scroll && type === 'colorOnScroll' ? backgroundColor : '';
    const background = type != 'colorOnScroll' || isMenuOpen ? backgroundColor : scrollBackground ;
    

    const navLinks = links.data

    return (
        <nav
            style={{
                background: background,
                color: textColor

            }}
            className={`
                ${position} 
                bg-[${backgroundColor}]
                w-full 
                z-50 
                flex 
                flex-wrap 
                items-center 
                justify-between 
                px-2 
                py-3 
                mb-0
            `}
        >
            <div
                className="
                    flex 
                    container 
                    mx-auto 
                    px-4
                    flex-wrap 
                    items-center 
                    justify-between 
                    
                "
            >
                <button
                    className="
                        text-sm 
                        font-bold 
                        leading-relaxed 
                        inline-flex 
                        items-center 
                        mr-4 
                        py-2 
                    "
                    onClick={() => router.push('/')}
                >
                    <img
                        src="https://placehold.co/150x30"
                        className="rounded-full mr-2"
                    />
                </button>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="ml-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-blueGray-400 rounded bg-transparent block outline-none focus:outline-none text-blueGray-300 lg:hidden" type="button">
                    {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>


                <div
                    className={`
                        items-center 
                        w-full 
                        lg:flex 
                        lg:w-auto 
                        flex-grow 
                        duration-300 
                        transition-all 
                        ease-in-out 
                        ${isMenuOpen ? '' : 'hidden'}
                    `}
                >
                    <ul
                        className="
                            lg:items-center 
                            flex 
                            flex-wrap 
                            list-none
                            pl-0 
                            mb-0 
                            flex 
                            flex-col 
                            list-none 
                            pl-0 
                            mb-0 
                            lg:flex-row
                        "
                    >
                        {navLinks && navLinks.map(({ id, attributes }) => (
                            <li key={id}>
                                <button
                                    onClick={() => router.push(attributes.href)}
                                    className="
                                        hover:opacity-75 
                                        px-3 
                                        py-4 
                                        lg:py-2 
                                        flex 
                                        items-center 
                                        text-xs 
                                        uppercase 
                                        font-bold 
                                        transition-all 
                                        duration-150 
                                        ease-in-out 
                                        text-white
                                    "
                                >
                                    {attributes.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;