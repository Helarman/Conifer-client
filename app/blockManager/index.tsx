import FeaturesSection from "../components/features/Features";
import HeroSection from "../components/hero/Hero";
import NavbarSection from "../components/navbar/Navbar";
import Teamsection from "../components/team/Team";

interface getBlockProps {
    __component: string;
    index?: number;
    text?: string;
}

interface BlocksArrayProps{
    hero: any
    features: any
    navbar: any
    team: any
}

const getBlockComponent: React.FC<getBlockProps> = ({ __component, ...rest }, index) => {
    let Block;
    
    const key = __component.replace('sections.', '')

    const blocks: BlocksArrayProps= {
        hero: HeroSection,
        features: FeaturesSection,
        navbar: NavbarSection,
        team: Teamsection
    }

    Block = blocks[key as keyof BlocksArrayProps]

    return Block ? <Block key={index} {...rest} /> : null;
};

const BlockManager = ({sections}: { sections: any }) => {
    const index = sections.map((items: { __component: string; }) => items.__component).indexOf('sections.navbar')
    sections.splice(0, 0, sections.splice(index, 1)[0]);
    

    return <div>{sections.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
    blocks: [],
};

export default BlockManager;