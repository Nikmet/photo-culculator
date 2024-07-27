import { create, StateCreator } from "zustand";

type SquareState = {
    square: number;
    perimeter: number;
};

type SquareActions = {
    setSquare: (value: number) => void;
    setPerimeter: (value: number) => void;
};

const squareSlice: StateCreator<SquareState & SquareActions> = (set) => ({
    square: 0,
    perimeter: 0,
    setSquare: (value: number) => {
        set({
            square: value
        });
    },
    setPerimeter: (value: number) => {
        set({
            perimeter: value
        });
    }
});

export const useSquareStore = create<SquareState & SquareActions>(squareSlice);
export const square = useSquareStore.getState().square;
