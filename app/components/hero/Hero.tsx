'use client'

import { useState } from "react";

interface HeroProps {
    text?: string
}

const Hero: React.FC<HeroProps> = ({ text }) => {
    const backgroundImage = 'bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)]'
    let [backgroundColor, setBackgroundColor] = useState('bg-[#111827]');


    let [title, setTitle] = useState('Hero section title');
    let [titleColor, setTitleColor] = useState('text-[#34eb7d]');

    let [subTitle, setSubTitle] = useState('Hero section subtitle');
    let [subTitleColor, setSubTitleColor] = useState('text-[#34eb7d]');

    let [description, setDiscription] = useState('Text example. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus!');
    let [textColor, setTextColor] = useState('text-[#ffffff]');


    const alignOptions = [
        { value: `left`, label: `left` },
        { value: `center`, label: `center` },
        { value: `right`, label: `right` },
    ]
    let [selectedAlign, setSelectedAlign] = useState(alignOptions[0].value);

    const aligns = {
        left: `text-left justify-start`,
        center: `text-center justify-center`,
        right: `text-right justify-end`,
    }

    let align = aligns[selectedAlign]

    const backgroundOptions = [
        { value: `color`, label: `Color` },
        { value: `image`, label: `Image` },
    ]
    let [selectedBackground, setSelectedBackground] = useState(backgroundOptions[0].value);

    const backrounds = {
        color: false,
        image: true,
    }

    let isBackgroundImage = backrounds[selectedBackground]

    return (

        <section
            className={`
                relative
                ${isBackgroundImage ? backgroundImage : backgroundColor}
                bg-cover 
                bg-center 
                bg-no-repeat
            `}
        >

            <div
                className="absolute bg-gray-700 h-full w-full opacity-75"
            >

            </div>

            <div className="z-10 w-3/2 bg-white absolute right-0 text-black p-5 ">
                <form className="flex flex-col">
                    <h1>Block customizing</h1>

                    <label
                        className="mt-2"
                        htmlFor="align"
                    >
                        Align:
                    </label>

                    <select
                        name="align"
                        id="align"
                        className="border-2 border-gray-500 p-1"
                        value={selectedAlign}
                        onChange={e => setSelectedAlign(e.target.value)}>
                        {alignOptions.map(({ value, label }) => (
                            <option className="border-2 border-gray-500 p-1 mt-2" key={value} value={value}>{label}</option>
                        ))}
                    </select>

                    <label
                        className="mt-2"
                        htmlFor="background"
                    >
                        Background:
                    </label>

                    <select
                        name="background"
                        id="background"
                        className="border-2 border-gray-500 p-1"
                        value={selectedBackground}
                        onChange={e => setSelectedBackground(e.target.value)}>
                        {backgroundOptions.map(({ value, label }) => (
                            <option className="border-2 border-gray-500 p-1 mt-2" key={value} value={value}>{label}</option>
                        ))}
                    </select>
                    
                    <label
                        className="mt-2"
                        htmlFor="backgroundColor"
                    >
                        Background Color:
                    </label>

                    <input
                        name="backgroundColor"
                        id="backgroundColor"
                        placeholder="title"
                        className="border-2 border-gray-500 p-1 mt-2"
                        type="text"
                        value={backgroundColor}
                        onChange={(event: any) => { setBackgroundColor(event.target.value) }}
                    />


                    <label
                        className="mt-2"
                        htmlFor="title"
                    >
                        Title:
                    </label>

                    <input
                        name="title"
                        id="title"
                        placeholder="title"
                        className="border-2 border-gray-500 p-1 mt-2"
                        type="text"
                        value={title}
                        onChange={(event: any) => { setTitle(event.target.value) }}
                    />

                    <label
                        className="mt-2"
                        htmlFor="titleColor"
                    >
                        Title color:
                    </label>

                    <input
                        name="titleColor"
                        id="titleColor"
                        placeholder="title"
                        className="border-2 border-gray-500 p-1 mt-2"
                        type="text"
                        value={titleColor}
                        onChange={(event: any) => { setTitleColor(event.target.value) }}
                    />

                    <label
                        className="mt-2"
                        htmlFor="subtitle"
                    >
                        Subtitle:
                    </label>

                    <input
                        name="subtitle"
                        id="subtitle"
                        className="border-2 border-gray-500 p-1 mt-2"
                        type="text"
                        value={subTitle}
                        onChange={(event: any) => { setSubTitle(event.target.value) }}
                    />

                    <label
                        className="mt-2"
                        htmlFor="subTitleColor"
                    >
                        Subtitle color:
                    </label>

                    <input
                        name="subTitleColor"
                        id="subTitleColor"
                        placeholder="title"
                        className="border-2 border-gray-500 p-1 mt-2"
                        type="text"
                        value={subTitleColor}
                        onChange={(event: any) => { setSubTitleColor(event.target.value) }}
                    />

                    <label
                        className="mt-2"
                        htmlFor="text"
                    >
                        Text:
                    </label>

                    <textarea
                        name="text"
                        id="text"
                        className="border-2 border-gray-500 p-1 resize-none"
                        rows={5}
                        value={description}
                        onChange={(event: any) => { setDiscription(event.target.value) }}
                    />

                    <label
                        className="mt-2"
                        htmlFor="textColor"
                    >
                        Text color:
                    </label>

                    <input
                        name="textColor"
                        id="textColor"
                        placeholder="title"
                        className="border-2 border-gray-500 p-1 mt-2"
                        type="text"
                        value={textColor}
                        onChange={(event: any) => { setTextColor(event.target.value) }}
                    />
                </form>
            </div>

            <div className="relative w-full h-screen">


                <div
                    className={`
                    
                    w-full 
                    px-4 
                    py-32 
                    h-screen 
                    items-center 
                    flex 
                    ${align}
                `}
                >
                    <div
                        className="
                        max-w-3xl 
                        flex 
                        flex-col
                    "
                    >
                        <h1
                            className={`
                            ${titleColor}
                            text-3xl 
                            font-extrabold 
                            sm:text-5xl
                        `}
                        >
                            {title}
                        </h1>

                        <h2
                            className={`
                            ${subTitleColor}
                            text-3xl 
                            font-extrabold 
                            text-transparent 
                            sm:text-5xl
                        `}
                        >
                            {subTitle}
                        </h2>

                        <p
                            className={`
                            ${textColor}
                            mx-auto 
                            mt-4 
                            max-w-xl 
                            sm:text-xl/relaxed
                        `}>
                            {description}
                        </p>

                        <div className={`mt-8 flex flex-wrap ${align} gap-4`}>
                            <button
                                className="
                                    block
                                    w-full 
                                    rounded 
                                    border 
                                    border-blue-600 
                                    bg-blue-600 
                                    px-12
                                    py-3 
                                    text-sm 
                                    font-medium 
                                    text-white 
                                    hover:bg-transparent 
                                    hover:text-white 
                                    focus:outline-none 
                                    focus:ring 
                                    active:text-opacity-75 
                                    sm:w-auto
                                "
                            >
                                Get Started
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;