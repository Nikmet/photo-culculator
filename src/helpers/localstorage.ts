export interface ILocalStorageValue {
    name: string;
    value: number;
    label: string;
}

export const INITIAL_ARRAY: ILocalStorageValue[] = [
    {
        name: "b300",
        value: 0,
        label: "Б-300"
    },
    {
        name: "b400",
        value: 0,
        label: "Б-400"
    },
    {
        name: "luv",
        value: 0,
        label: "Люверсы"
    },
    {
        name: "lfp",
        value: 0,
        label: "Широкоформатная печать"
    },
    {
        name: "plastic",
        value: 0,
        label: "Пластик"
    },
    {
        name: "pc",
        value: 0,
        label: "Плоттерная резка"
    },
    {
        name: "mf",
        value: 0,
        label: "Монтажная пленка"
    },
    {
        name: "plywood",
        value: 0,
        label: "Фанера"
    },
    {
        name: "acrylic",
        value: 0,
        label: "Акрил"
    },
    {
        name: "tf",
        value: 0,
        label: "Термоткань"
    },
    {
        name: "tp",
        value: 0,
        label: "Термопленка"
    },
    {
        name: "env",
        value: 0,
        label: "Гравировка"
    }
];

export const setLocalStorageValue = (name: string, value: number) => {
    const dataString = localStorage.getItem("data");
    if (dataString) {
        const data: ILocalStorageValue[] = JSON.parse(dataString);
        const findValue = data.find((v) => v.name === name);
        const newData = [...data.filter((v) => v.name !== name), { ...findValue, value }];
        localStorage.setItem("data", JSON.stringify(newData));
    }
};

export const getLocalStorageValue = (name: string): number => {
    const dataString = localStorage.getItem("data");
    if (dataString) {
        const data: ILocalStorageValue[] = JSON.parse(dataString);
        return data.find((v) => v.name === name)?.value ?? 0;
    }
    return 0;
};

export const resetLocalStorage = () => {
    localStorage.setItem("data", JSON.stringify(INITIAL_ARRAY));
};
