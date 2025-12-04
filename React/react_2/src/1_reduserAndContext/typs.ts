export type User = {
  id: number;
  img: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type counterState = {
  count: number;
};

export type CounterAction =
  | { type: "increment" }
  | { type: "decrament" }
  | { type: "reset" };
