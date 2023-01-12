const str: string = 'Hello';
console.log(str);

const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;
const message: string = 'Hello Typescript';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'TypeScript'];

//Tuple
const contact: [string, number] = ['Vladilen', 1234567];

//Any

let variable: any = 43;

variable = 'Rrr';
variable = [];

function sayMyName(name: String): void {
    console.log(name);
}
sayMyName('Jhonson');

//never - функции без остановки

function infinity(): never {
    while(true) {}
}

//Type - создание своих типов (alias)

type Login = string;

const login: Login = 'admin';

type ID = string | number;
const id1: ID = 123;
const id2: ID = 'asd';
// const id3: ID = true;

type SomeType = string | null | undefined;