'use client'

import FeaturesBody from "./FeaturesBody"
import {FeaturesCardProps} from "./FeaturesCard"



export interface FeaturesProps {
    title: string
    subTitle: string
    titleColor: string
    subTitleColor: string
    featuresImage: any
    cards: FeaturesCardProps[]
    type: string
}

const Features: React.FC<FeaturesProps> = ({
    title,
    subTitle,
    titleColor,
    subTitleColor,
    featuresImage,
    cards,
    type,
}) => {

    
    return (
        <div className="w-full">
            <div className="relative py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-12 flex flex-wrap -mx-4 justify-start">
                        <div className="px-4 relative w-full lg:w-8/12 text-left">
                            <h3 className="text-3xl font-bold mt-3 mb-1 text-gray-700">{title}</h3>
                            <p className="mt-2 mb-4 text-xl leading-relaxed text-blueGray-500">{subTitle}</p>
                        </div>
                    </div>

                    <FeaturesBody type={type} featuresImage={featuresImage} cards={cards}/>

                </div>
            </div>
        </div>
    )
}
export default Features