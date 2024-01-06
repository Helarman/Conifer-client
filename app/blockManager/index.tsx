import FeaturesSection from "../components/features/Features";
import HeroSection from "../components/hero/Hero";
import NavbarSection from "../components/navbar/Navbar";
import Teamsection from "../components/team/Team";
import BlogSection from "../components/blog/BlogSection";

import FooterSection from "@/app/components/footer/Footer"
import TimelineSection from "../components/timeline/Timeline";

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
    blog: any
    timeline: any
    footer: any
}

const getBlockComponent: React.FC<getBlockProps> = ({ __component, ...rest }, index) => {
    let Block;
    
    const key = __component.replace('sections.', '')

    const blocks: BlocksArrayProps= {
        hero: HeroSection,
        features: FeaturesSection,
        navbar: NavbarSection,
        team: Teamsection,
        blog: BlogSection,
        timeline: TimelineSection,
        footer: FooterSection
    }

    Block = blocks[key as keyof BlocksArrayProps]

    return Block ? <Block key={index} {...rest} /> : null;
};

const BlockManager = ({sections}: { sections: any }) => {
    const navbarIndex = sections.map((items: { __component: string; }) => items.__component).indexOf('sections.navbar') //get the index of the element with the navbar data
    sections.splice(0, 0, sections.splice(navbarIndex, 1)[0]); //get the element with the navbar data and move it to the start

    const footerIndex = sections.map((items: { __component: string; }) => items.__component).indexOf('sections.footer') //get the index of the element with the footer data
    sections.splice(sections.length, 1, sections.splice(footerIndex, 1)[0]); //get the element with the footer data and move it to the end

    return <div>{sections.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
    blocks: [],
};

export default BlockManager;