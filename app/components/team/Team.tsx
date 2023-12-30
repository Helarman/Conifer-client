'use client'

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
                    <div className="mb-12 flex flex-wrap -mx-4 justify-start">
                        <div className="px-4 relative w-full lg:w-8/12 text-left">
                            <h3 className="text-3xl font-bold mt-3 mb-1 text-gray-700">{title}</h3>
                            <p className="mt-2 mb-4 text-xl leading-relaxed text-blueGray-500">{subTitle}//{type}</p>
                        </div>
                    </div>
                    
                    <TeamBody cards={cards} type={type}/>
                    
                </div>
            </section>
        </div>


    )
}

export default Team;