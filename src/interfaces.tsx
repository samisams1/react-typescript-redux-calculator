//interfaces.tsx
export interface AppName {
    name: string;
  }
  export interface Address {
    houseNo: number;
    street: string;
    Town: string;
  }
  export interface Student {
    name: string;
    surname: string;
    age?: number;
    address?: Address;
    level:Level;
  }
  export enum Level {
    Undergraduate = "Undergraduate",
    Postgraduate = "Postgraduate"
  }