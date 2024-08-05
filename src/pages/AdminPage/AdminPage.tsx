import { FunctionComponent, useEffect, useState } from "react";
import SelectInput, { IOption } from "../../components/Select/Select";
import { SingleValue } from "react-select";
import { ILocalStorageValue, setLocalStorageValue } from "../../helpers/localstorage";
import Input from "../../components/Input/Input";

interface AdminPageProps {}

const options: IOption[] = [];

const AdminPage: FunctionComponent<AdminPageProps> = () => {
    const [input, setInput] = useState<string | undefined>();
    const [value, setValue] = useState<number | undefined>();

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

    const onClick = () => {
        if (input && value) {
            setLocalStorageValue(input, value);
        }
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
            <Input
                id="b300"
                type="number"
                label="Начальное значение"
                appearance="big"
                titlePosition="center"
                onChange={(e) => setValue(Number(e.target.value))}
                value={value}
            />
            <button onClick={onClick}>Записать</button>
        </>
    );
};

export default AdminPage;
