import { FunctionComponent, useEffect } from "react";
import { useSquareStore } from "../../models/SquareStore";

interface BannerPageProps {}

const BannerPage: FunctionComponent<BannerPageProps> = () => {
    const { square } = useSquareStore();

    useEffect(() => {
        document.title = "Баннер";
    }, []);

    return <>Banner page {square}</>;
};

export default BannerPage;
