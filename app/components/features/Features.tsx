'use client'

import Header from "../header/header"
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
                    <Header title={title} subTitle={subTitle}/>

                    <FeaturesBody type={type} featuresImage={featuresImage} cards={cards}/>

                </div>
            </div>
        </div>
    )
}
export default Features