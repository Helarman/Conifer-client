'use client'

import Icon from "../Icon"

export interface FeaturesCardProps {
    id: string
    title: string
    description: string
    icon: string
    textColor: string
    iconBackground: string
    iconColor: string
}


export const FirstFeaturesCard: React.FC<FeaturesCardProps> = ({
    title,
    description,
    icon,
    textColor,
    iconBackground,
    iconColor,

}) => {
    return (
        <div
            className="
                text-left 
                pr-6 
                py-6 
                flex 
                items-center
            "
        >

            <div
                style={{
                    background: iconBackground,
                    color: iconColor
                }}
                className="
                    rounded-full 
                    justify-center 
                    items-center 
                    inline-flex 
                    text-center 
                    p-2 
                    text-xl
                    w-12 
                    h-12
                "
            >
                <Icon
                    icon={icon}
                    size={20}
                    color={iconColor}
                />
            </div>

            <div
                style={{ color: textColor }}
                className="ml-6 flex-1"
            >
                <h6
                    className="
                        text-xl 
                        font-bold 
                        mt-3 
                        mb-0
                    "
                >
                    {title}
                </h6>

                <p
                    className="
                        mt-2 
                        mb-4 
                        leading-relaxed
                    "
                >
                    {description}
                </p>
            </div>
        </div>
    )
}

export const SecondFeaturesCard: React.FC<FeaturesCardProps> = ({
    title,
    description,
    icon,
    textColor,
    iconBackground,
    iconColor,

}) => {
    return (
        <div
            className="
                text-center 
                relative
            "
        >
            <div
                className="
                    relative 
                    flex 
                    flex-col 
                    min-w-0 
                    break-words 
                    w-full 
                    mb-6
                "
            >
                <div className="p-6 flex-auto">
                    <div
                        style={{
                            background: iconBackground,
                            color: iconColor
                        }}
                        className="
                            rounded-full 
                            justify-center 
                            items-center 
                            inline-flex 
                            text-center 
                            p-2 
                            m-5 
                            text-xl 
                            w-12 
                            h-12"
                    >
                        <Icon
                            icon={icon}
                            size={20}
                            color={iconColor}
                        />
                    </div>
                    
                    <div style={{ color: textColor }}>
                        <h6
                            className="
                            text-xl 
                            font-bold 
                            mt-0 
                            mb-0
                        "
                        >
                            {title}
                        </h6>

                        <p
                            className="
                            mt-2
                            mb-4 
                            leading-relaxed
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


