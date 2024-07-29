import { FunctionComponent, useEffect } from "react";
import SelectInput from "../../components/Select/Select";

interface CutPageProps {}

const CutPage: FunctionComponent<CutPageProps> = () => {
    useEffect(() => {
        document.title = "Лазерная резка";
    }, []);

    return (
        <>
            <SelectInput id="difficulty" label="Сложность" appearance="big" />
        </>
    );
};

export default CutPage;
