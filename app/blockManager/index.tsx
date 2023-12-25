import Hero from "../components/hero/Hero";
import CtaCommandLine from "../components/hero/Hero";


interface getBlockProps {
    __component: string;
    index?: number;
    text?: string;
}

const getBlockComponent: React.FC<getBlockProps> = ({ __component, ...rest }, index) => {
    let Block;

    const key = __component.replace('sections.', '')

    const blocks = {
        hero: Hero
    }

    Block = blocks[key]
 

    return Block ? <Block key={index} {...rest} /> : null;
};

const BlockManager = ({blocks}: { blocks: any }) => {
    

    return <div>{blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
    blocks: [],
};

export default BlockManager;