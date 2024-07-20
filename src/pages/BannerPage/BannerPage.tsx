import { FunctionComponent, useEffect } from "react";

interface BannerPageProps {}

const BannerPage: FunctionComponent<BannerPageProps> = () => {
    useEffect(() => {
        document.title = "Баннер";
    }, []);

    return <>Banner page</>;
};

export default BannerPage;
