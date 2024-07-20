import { FunctionComponent, useEffect } from "react";

interface TapePageProps {}

const TapePage: FunctionComponent<TapePageProps> = () => {
    useEffect(() => {
        document.title = "Пленка ПВX";
    }, []);
    return <>tape page</>;
};

export default TapePage;
