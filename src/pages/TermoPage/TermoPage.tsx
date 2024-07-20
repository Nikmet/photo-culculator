import { FunctionComponent, useEffect } from "react";

interface TermoPageProps {}

const TermoPage: FunctionComponent<TermoPageProps> = () => {
    useEffect(() => {
        document.title = "Термотрансфер";
    }, []);

    return <>termo page</>;
};

export default TermoPage;
