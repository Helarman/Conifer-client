'use client'

import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { FaFacebook, FaInstagram, FaTwitter, FaBehance, FaGithub, FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export interface TeamCardProps {
    index?: number
    id: number
    name: string
    position: string
    description?: string
    avatar: any
    textColor: string
    facebook: string
    instagram: string
    twitter: string
    behance: string
    github: string

}

interface TeamCardSliderProps {
    cards: TeamCardProps[]
    value: number
    onChange: (value: number) => void
}

export const TeamRowCard: React.FC<TeamCardProps> = ({
    id,
    name,
    position,
    avatar,
    textColor,
    facebook,
    instagram,
    twitter,
    behance,
    github
}) => {
    const router = useRouter();

    return (
        <div 
            className="
                flex 
                w-full 
                flex-col 
                lg:mb-0 
                mb-12 
                px-4
            "
        >
            <div className="px-6">
                <img
                     src={`http://127.0.0.1:1337${avatar.data.attributes.url}`} 
                     className="
                        shadow-lg 
                        rounded-full 
                        mx-auto 
                        w-52 
                        h-52" 
                />
                <div 
                    className="
                        pt-6 
                        text-center
                    "
                >
                    <h5 
                        style={{color: textColor}}
                        className="
                            text-xl 
                            font-bold
                        "
                    >
                        {name}
                    </h5>

                    <p 
                        style={{color: textColor}}
                        className="
                            mt-1 
                            text-sm 
                            uppercase 
                            font-bold
                        "
                    >
                        {position}
                    </p>
                    
                    <div 
                        className="
                            mt-6 
                            flex 
                            justify-center
                        "
                    >
                        <button onClick={() => router.push(facebook)}>
                            <FaFacebook
                                className={`
                                    ${facebook ? '' : 'hidden'}
                                    text-[#3b5998]
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    w-8 
                                    h-8  
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>

                        <button onClick={() => router.push(instagram)}>
                            <FaInstagram

                                className={`
                                    ${instagram ? '' : 'hidden'}
                                    text-[#d6249f]
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    w-8 
                                    h-8 
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>

                        <button onClick={() => router.push(twitter)}>
                            <FaTwitter
                                className={`
                                    ${twitter ? '' : 'hidden'}
                                    text-[#1da1f2]
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    w-8 
                                    h-8 
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>

                        <button onClick={() => router.push(behance)}>
                            <FaBehance
                                className={`
                                    ${behance ? '' : 'hidden'}
                                    text-[#053eff]
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    w-8 
                                    h-8 
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>

                        <button onClick={() => router.push(github)}>
                            <FaGithub
                                className={`
                                    ${github ? '' : 'hidden'}
                                    text-[#171515]
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    w-8 
                                    h-8 
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const TeamColCard: React.FC<TeamCardProps> = ({
    id,
    index,
    description,
    name,
    position,
    avatar,
    textColor,
    facebook,
    instagram,
    twitter,
    behance,
    github,
}) => {
    const router = useRouter();

    const isOdd = index && index % 2 != 0

    return (
        <div 
            className="
                flex 
                items-center 
                justify-between
            "
        >
            <div
                className={`
                    ${isOdd ? 'hidden' : ''}
                    py-12 
                    w-full  
                    md:w-6/12
                `}
            >
                <div className="p-6">
                    <img
                        className="
                            w-full 
                            rounded-lg 
                            shadow-xl
                        "
                        src={`http://127.0.0.1:1337${avatar.data.attributes.url}`}
                        alt="..."
                    />
                </div>
            </div>

            <div 
                className="
                    pt-12 
                    px-4 
                    w-full 
                    md:w-6/12 
                    items-center
                "
            >
                <div
                    className={`
                        ${isOdd ? 'text-left' : 'text-right'}
                        p-4 
                        pt-6 
                        md:p-0 
                    `}
                >
                    <h2
                        style={{color: textColor}}
                        className="
                            text-2xl 
                            font-bold
                            mt-0 
                            mb-2
                        "
                    >
                        {name}
                    </h2>
                    <h3 
                        style={{color: textColor}}
                        className="
                            text-lg 
                            uppercase 
                            font-semibold 
                            mt-0 
                            mb-2
                        "
                    >
                        {position}
                    </h3>
                    <p  
                        style={{color: textColor}}
                        className="
                            mt-3 
                            text-lg 
                            leading-relaxed 
                        "
                    >
                        {description}
                    </p>
                    <div
                        className={`
                            ${isOdd ? 'justify-start' : 'justify-end'}
                            mt-6 
                            flex   
                        `}
                    >
                        <button onClick={() => router.push(facebook)}>
                            <FaFacebook
                                className={`
                                    ${facebook ? '' : 'hidden'}
                                    text-[#3b5998]
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    w-8 
                                    h-8  
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>

                        <button onClick={() => router.push(instagram)}>
                            <FaInstagram

                                className={`
                                    ${instagram ? '' : 'hidden'}
                                    text-[#d6249f]
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    w-8 
                                    h-8 
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>

                        <button onClick={() => router.push(twitter)}>
                            <FaTwitter
                                className={`
                                    ${twitter ? '' : 'hidden'}
                                    text-[#1da1f2]
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    w-8 
                                    h-8 
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>

                        <button onClick={() => router.push(behance)}>
                            <FaBehance
                                className={`
                                    ${behance ? '' : 'hidden'}
                                    text-[#053eff]
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    w-8 
                                    h-8 
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>

                        <button onClick={() => router.push(github)}>
                            <FaGithub
                                className={`
                                    ${github ? '' : 'hidden'}
                                    text-[#171515]
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    w-8 
                                    h-8 
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`
                    ${isOdd ? '' : 'hidden'}
                    py-12 
                    w-full  
                    md:w-6/12
                `}
            >
                <div className="p-6">
                    <img
                        className="w-full rounded-lg shadow-xl transform"
                        src={`http://127.0.0.1:1337${avatar.data.attributes.url}`}
                        alt="..."
                    />
                </div>
            </div>
        </div>
    )
}

export const TeamSliderCard: React.FC<TeamCardSliderProps> = ({
    cards,
    value,
    onChange,
}) => {
    const router = useRouter();

    const onAdd = useCallback(() => {
        if (value === cards.length - 1) {
            onChange(0)
        }
        else {
            onChange(value + 1);
        }
    }, [onChange, value]);

    const onReduce = useCallback(() => {
        if (value === 0) {
            onChange(cards.length - 1);
        }
        else {
            onChange(value - 1);
        }
    }, [onChange, value]);

    return (
        <div 
            className="
                flex 
                items-center 
                justify-between
            "
        >
            <div 
                className="
                    py-12 
                    w-full 
                    md:w-6/12
                "
            >
                <div className="p-6">
                    <img
                        className="
                            w-full 
                            rounded-lg 
                            shadow-xl 
                            transform
                        "
                        src={`http://127.0.0.1:1337${cards[value].avatar.data.attributes.url}`}
                        alt="..."
                    />
                </div>
            </div>

            <div 
                className="
                    pt-12 
                    px-4 
                    w-full 
                    md:w-6/12 
                    items-center
                "
            >
                <div 
                    className="
                        p-4 
                        pt-6 
                        md:p-0 
                        text-right
                    "
                >
                    <h2
                        style={{color: cards[value].textColor}} 
                        className="
                            text-2xl 
                            font-bold 
                            mt-0 
                            mb-2
                        "
                    >
                        {cards[value].name}
                    </h2>

                    <h3 
                        style={{color: cards[value].textColor}}
                        className="
                            text-lg 
                            uppercase 
                            font-semibold 
                            mt-0 
                            mb-2
                        "
                    >
                        {cards[value].position}
                    </h3>

                    <p 
                        style={{color: cards[value].textColor}}
                        className="
                            mt-3 
                            text-lg 
                            leading-relaxed 
                        "
                    >
                        {cards[value].description}
                    </p>

                    <div 
                        className="
                            mt-6 
                            flex 
                            justify-end
                        "
                    >
                        <button onClick={() => router.push(cards[value].facebook)}>
                            <FaFacebook
                                className={`
                                    ${cards[value].facebook ? '' : 'hidden'}
                                    text-[#3b5998]
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    w-8 
                                    h-8  
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>

                        <button onClick={() => router.push(cards[value].instagram)}>
                            <FaInstagram

                                className={`
                                    ${cards[value].instagram ? '' : 'hidden'}
                                    text-[#d6249f]
                                    inline-flex 
                                    items-center 
                                    justify-center  
                                    w-8 
                                    h-8 
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>

                        <button onClick={() => router.push(cards[value].twitter)}>
                            <FaTwitter
                                className={`
                                    ${cards[value].twitter ? '' : 'hidden'}
                                    text-[#1da1f2]
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    w-8 
                                    h-8 
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>

                        <button onClick={() => router.push(cards[value].behance)}>
                            <FaBehance
                                className={`
                                    ${cards[value].behance ? '' : 'hidden'}
                                    text-[#053eff]
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    w-8 
                                    h-8 
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>

                        <button onClick={() => router.push(cards[value].github)}>
                            <FaGithub
                                className={`
                                    ${cards[value].github ? '' : 'hidden'}
                                    text-[#171515]
                                    inline-flex 
                                    items-center 
                                    justify-center
                                    w-8 
                                    h-8 
                                    outline-none 
                                    focus:outline-none 
                                    mr-1 
                                    mb-1
                                `}
                            />
                        </button>
                    </div>
                    <div
                        style={{color: cards[value].textColor}} 
                        className="mt-6">
                        <button onClick={onReduce} className="mr-2">
                            <FaAngleLeft className="w-8 h-8" />
                            <span className="sr-only">Previous</span>
                        </button>
                        <button onClick={onAdd}>
                            <FaAngleRight className="w-8 h-8" />
                            <span className="sr-only">Previous</span>
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}
