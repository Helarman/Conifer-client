
import * from "react-icons";

const getIconComponent = ({ icon }: { icon: string }) => {

    let Icon = icon


    return Icon ? <Icon /> : null;
};

const IconManager = ({ icon }: { icon: string }) => {
    return <div>{getIconComponent({icon})}</div>;
};

export default IconManager;