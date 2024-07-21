import { create, StateCreator } from "zustand";

type SquareState = {
    square: number;
};

type SquareActions = {
    setSquare: (value: number) => void;
};

const squareSlice: StateCreator<SquareState & SquareActions> = (set) => ({
    square: 0,
    setSquare: (value: number) => {
        set({
            square: value
        });
    }
});

export const useSquareStore = create<SquareState & SquareActions>(squareSlice);
export const square = useSquareStore.getState().square;
