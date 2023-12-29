'use client'

interface LinkProps{
    label: string
    href: string
}

interface NavbarProps{
    type: string
    logo: any
    links: LinkProps[]
}
const Navbar: React.FC<NavbarProps> = ({
    type,
    logo,
    links
}) => {
    console.log(links)
    const navLinks = links.data
    return (
        <nav className="w-full z-50 absolute flex flex-wrap items-center justify-between px-2 py-3 mb-0 bg-gray-800 shadow-md">
            <div className="flex container mx-auto flex flex-wrap items-center justify-between px-0 lg:px-4">
                <a className="text-sm font-bold leading-relaxed inline-flex items-center mr-4 py-2 whitespace-nowrap uppercase text-white" href="#/" />
                <div className="items-center w-full lg:flex lg:w-auto flex-grow duration-300 transition-all ease-in-out hidden">
                    <ul className="lg:items-center flex flex-wrap list-none pl-0 mb-0 flex flex-col list-none pl-0 mb-0 lg:flex-row">
                        {navLinks && navLinks.map(({ id, attributes }) => (
                            <li key={id}>
                                <a 
                                    href="" 
                                    className="hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out text-white">
                                        {attributes.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className="lg:items-center lg:ml-auto flex flex-wrap list-none pl-0 mb-0 flex flex-col list-none pl-0 mb-0 lg:flex-row">
                        {navLinks && navLinks.map(({ id, attributes }) => (
                            <li key={id}><a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 transition-all duration-150 ease-in-out text-white" href="https://www.facebook.com/CreativeTim" target="_blank">
                                <span className="lg:hidden lg:ml-0 ml-2">{attributes.label}</span>
                            </a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;