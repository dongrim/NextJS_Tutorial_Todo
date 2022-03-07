import pallete from '../styles/pallete';

console.log(pallete);

export type TodoType = {
  id: number;
  text: string;
  color:
    "red" | "orange" | "yellow" | "green" |
    "blue" | "navy" | "gray" | "deep_gray" |
    "deep_red" | "deep_green";
  checked: boolean;
};
