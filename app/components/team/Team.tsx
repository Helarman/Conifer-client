'use client'

import Header from "../header/header"
import TeamBody from "./TeamBody"
import { TeamCardProps } from "./TeamCard"

interface TeamProps {
    type: string
    title: string
    subTitle: string
    cards: TeamCardProps[]
    facebook: string
    instagram: string
    twitter: string
    behance: string
    github: string
}

const Team: React.FC<TeamProps> = ({
    type,
    title,
    subTitle,
    cards,
}) => {


    return (
        <div className="w-full">
            <section className="pt-20 pb-48">
                <div className="container mx-auto px-4">
                    <Header title={title} subTitle={subTitle} />

                    <TeamBody cards={cards} type={type} />

                </div>
            </section>
        </div>


    )
}

export default Team;