import { FunctionComponent, useEffect, useState } from "react";
import SelectInput, { IOption } from "../../components/Select/Select";
import { SingleValue } from "react-select";
import { ILocalStorageValue } from "../../helpers/localstorage";

interface AdminPageProps {}

const options: IOption[] = [];

const AdminPage: FunctionComponent<AdminPageProps> = () => {
    const [input, setInput] = useState<string | undefined>();

    useEffect(() => {
        const data: ILocalStorageValue[] = JSON.parse(localStorage.getItem("data") ?? "");
        data.forEach((v) => options.push({ value: v.name, label: v.label }));
    }, []);

    const getValue = () => {
        return input ? options.find((c) => c.value === input) : "";
    };

    const onChange = (newValue: SingleValue<IOption | string>) => {
        setInput((newValue as IOption).value);
    };

    return (
        <>
            <SelectInput
                options={options}
                id="cdf"
                label="Выберете поле для изменения"
                titlePosition="center"
                appearance="big"
                onChange={onChange}
                value={getValue()}
            />
        </>
    );
};

export default AdminPage;
