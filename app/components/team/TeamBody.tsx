'use client'

import { TeamCardProps, TeamRowCard, TeamColCard, TeamSliderCard } from "./TeamCard"
import { useRouter } from "next/navigation";
import { useState } from "react";

import { FaFacebook, FaInstagram, FaTwitter, FaBehance, FaGithub } from "react-icons/fa6";

interface TeamSectionProps {
    cards: TeamCardProps[]
}

interface TeamBodyProps {
    type: string
    cards: TeamCardProps[]
}

interface TeamTypesProps {
    row: any
    col: any
    slider: any
}

const RowTeam: React.FC<TeamSectionProps> = ({
    cards
}) => {

    return (
        <div className="flex flex-col justify-between md:flex-row w-full">
            {cards && cards.map(({ id, name, position, avatar, facebook, instagram, twitter, behance, github, textColor }) => (
                <div key={id}>
                    <TeamRowCard
                        id={id}
                        name={name}
                        position={position}
                        avatar={avatar}
                        textColor={textColor}
                        facebook={facebook}
                        instagram={instagram}
                        twitter={twitter}
                        behance={behance}
                        github={github}
                    />
                </div>
            ))}
        </div>
    )
}

const ColTeam: React.FC<TeamSectionProps> = ({
    cards,
}) => {
    const router = useRouter()
    return (
        <>
            {cards && cards.map(({ id, name, position, avatar, facebook, instagram, twitter, behance, github, description, textColor }) => (
                <div key={id}>
                    <TeamColCard
                        index={cards.findIndex(item => item.id === id)}
                        id={id}
                        description={description}
                        name={name}
                        position={position}
                        textColor={textColor}
                        avatar={avatar}
                        facebook={facebook}
                        instagram={instagram}
                        twitter={twitter}
                        behance={behance}
                        github={github}
                    />
                </div>
            ))}
        </>

    )
}
const SliderTeam: React.FC<TeamSectionProps> = ({
    cards,
}) => {
    const router = useRouter()
    
    const [slide, setSlide] = useState(0);

    return (
        <TeamSliderCard
            onChange={(value) => setSlide(value)}
            value={slide}
            cards={cards}
        />
    )
}

const TeamBody: React.FC<TeamBodyProps> = ({
    cards,
    type,
}) => {
    const teamTypes: TeamTypesProps = {
        row: <RowTeam cards={cards} />,
        col: <ColTeam cards={cards} />,
        slider: <SliderTeam cards={cards} />
    }

    return teamTypes[type as keyof TeamTypesProps]
}

export default TeamBody;