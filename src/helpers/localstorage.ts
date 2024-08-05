export interface ILocalStorageValue {
    name: string;
    value: number;
}

export const INITIAL_ARRAY: ILocalStorageValue[] = [
    {
        name: "b300",
        value: 0
    },
    {
        name: "b400",
        value: 0
    },
    {
        name: "luv",
        value: 0
    },
    {
        name: "lfp",
        value: 0
    },
    {
        name: "plastic",
        value: 0
    },
    {
        name: "pc",
        value: 0
    },
    {
        name: "mf",
        value: 0
    },
    {
        name: "plywood",
        value: 0
    },
    {
        name: "acrylic",
        value: 0
    },
    {
        name: "tf",
        value: 0
    },
    {
        name: "tp",
        value: 0
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
