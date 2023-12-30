'use client'

import Button, { ButtonProps } from "../buttons/Button"

interface Aligns {
    left: string
    center: string
    right: string
}

export interface HeroProps {
    isBackgroundImage: boolean
    backgroundImage?: any
    backgroundColor?: string
    alignment: string
    title: string
    titleColor: string
    subTitle: string
    subTitleColor: string
    textColor: string
    text: string
    buttons?: ButtonProps[]

}

const Hero: React.FC<HeroProps> = ({
    isBackgroundImage,
    backgroundImage,
    backgroundColor,
    alignment,
    title,
    titleColor,
    subTitle,
    subTitleColor,
    textColor,
    text,
    buttons
}) => {
    
    const aligns: Aligns= {
        left: `text-left justify-start`,
        center: `text-center justify-center`,
        right: `text-right justify-end`,
    }

    let align = aligns[alignment as keyof Aligns]
    
    return (

        <section
            style={{ backgroundColor: backgroundColor }}
            className={`
                min-h-screen
                w-full
                xl:px-20 
                md:px-10
                sm:px-2
                px-4
                relative
                bg-cover 
                bg-center 
                bg-no-repeat
            `}
        >

            {/*<img
                src={`${isBackgroundImage ? '' : 'hidden'}`}
                className={`${isBackgroundImage ? '' : 'hidden'} absolute h-full w-full left-0`}
                alt=""
            />*/}

            <div
                className={`${isBackgroundImage ? '' : 'hidden'} absolute bg-gray-700 h-full w-full opacity-75 left-0`}
            >
            </div>

            <div className="relative ">


                <div
                    className={`
                    
                    container mx-auto px-4
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
                            style={{ color: titleColor }}
                            className={`
                            text-3xl 
                            font-extrabold 
                            sm:text-5xl
                        `}
                        >
                            {title}
                        </h1>
                        <h2
                            style={{ color: subTitleColor }}
                            className={`
                            text-3xl 
                            font-extrabold 
                            sm:text-5xl
                        `}
                        >
                            {subTitle}
                        </h2>

                        <p
                            style={{ color: textColor }}
                            className={`
                            mt-4 
                            max-w-xl 
                            sm:text-xl/relaxed
                        `}>
                            {text}
                        </p>

                        <div className={`mt-8 flex flex-wrap ${align} gap-4`}>
                            {buttons && buttons.map(({id, label, link, rounded, small, outline, icon, labelColor, backgroundColor, borderColor}) => (
                            <div key={id}>
                                <Button
                                    label={label} 
                                    link={link} 
                                    rounded={rounded} 
                                    small={small} 
                                    outline={outline} 
                                    icon={icon} 
                                    labelColor={labelColor} 
                                    backgroundColor={backgroundColor}
                                    borderColor={borderColor}
                                />
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;