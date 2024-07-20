import { FunctionComponent, useEffect } from "react";

interface CutPageProps {}

const CutPage: FunctionComponent<CutPageProps> = () => {
    useEffect(() => {
        document.title = "Лазерная резка";
    }, []);

    return <>cut page</>;
};

export default CutPage;
