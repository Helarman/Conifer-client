'use client'

interface HeaderProps {
    title: string
    subTitle: string
}
const Header: React.FC<HeaderProps> = ({
    title,
    subTitle
}) => {
    return (
        <div className="mb-12 flex flex-wrap -mx-4 justify-start">
            <div className="px-4 relative w-full lg:w-8/12 text-left">
                <h3 className="text-3xl font-bold mt-3 mb-1 text-gray-700">{title}</h3>
                <p className="mt-2 mb-4 text-xl leading-relaxed text-blueGray-500">{subTitle}</p>
            </div>
        </div>
    )
}

export default Header;