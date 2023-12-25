'use client'

interface HeroProps {
    text?: string
}

const Hero: React.FC<HeroProps> = ({text}) => {
    return(
        <div>
            {text}
        </div>
    )
}

export default Hero;