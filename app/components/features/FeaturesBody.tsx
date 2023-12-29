'use client'

import Icon from "../Icon";
import { FirstFeaturesCard, SecondFeaturesCard, FeaturesCardProps } from "./FeaturesCard";


interface FeaturesBodyProps {
    cards: FeaturesCardProps[]
    featuresImage?: any
    type: string
}

interface FeaturesSectionProps {
    cards: FeaturesCardProps[]
    featuresImage?: any
}

interface FeaturesTypesProps {
    Features1: any
    Features2: any
}

const FirstFeatures: React.FC<FeaturesSectionProps> = ({
    cards,
    featuresImage
}) => {
    return (
        <div className="items-center flex flex-wrap -mx-4">
            <div className="px-4 relative w-full lg:w-6/12">
                {cards && cards.map(({ id, title, description, icon, textColor, iconBackground, iconColor }) => (
                    <div key={id}>
                        <FirstFeaturesCard
                            id={id}
                            title={title}
                            description={description}
                            icon={icon}
                            textColor={textColor}
                            iconBackground={iconBackground}
                            iconColor={iconColor}
                        />
                    </div>
                ))}
            </div>

            <div className="md:mx-auto px-4 relative w-full lg:w-6/12 w-10/12">
                <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-500">
                    <img
                        alt="..."
                        src="https://placehold.co/700x400"
                        className="w-full align-middle rounded-t-lg"
                    />

                    <div className="relative p-8 mb-4">
                        <h4 style={{ color: featuresImage?.textColor }} className="text-xl font-bold">
                            {featuresImage?.title}
                        </h4>
                        <p style={{ color: featuresImage?.textColor }} className="text-md font-light mt-2">
                            {featuresImage?.description}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

const SecondFeatures: React.FC<FeaturesSectionProps> = ({
    cards,
}) => {
    return (
        <div className="items-center mt-12 flex flex-col md:flex-row -mx-4">
            {cards && cards.map(({ id, title, description, icon, textColor, iconBackground, iconColor }) => (
                <div key={id}>
                    <SecondFeaturesCard
                        id={id}
                        title={title}
                        description={description}
                        icon={icon}
                        textColor={textColor}
                        iconBackground={iconBackground}
                        iconColor={iconColor}
                    />
                </div>

            ))}
        </div>
    )
}

const FeaturesBody: React.FC<FeaturesBodyProps> = ({
    cards,
    featuresImage,
    type,
}) => {
    const featuresTypes: FeaturesTypesProps = {
        Features1: <FirstFeatures cards={cards} featuresImage={featuresImage} />,
        Features2: <SecondFeatures cards={cards} />
    }

    return featuresTypes[type as keyof FeaturesTypesProps]
}

export default FeaturesBody;