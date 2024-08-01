//---------- Conceptos de Programación en TypeScript

//---------- 1. Variables y constantes: Tipos, Tipos personalizados

//1. Personalized type
//Crea un tipo personalizado para un objeto Producto con propiedades id, nombre, y precio.
// type Product = {
//   id: number;
//   name: string;
//   precio: number;
// };

//---------- 2. Operadores (aritméticos, booleanos)

//Implementa una función que determine si un número es par utilizando operadores aritméticos y booleanos.
// function isNumPair(num:number):boolean{
//   return num % 2 === 0;
// }

// const a:number = 8;

// const validate: boolean = isNumPair(a);

// console.log(validate);

//---------- 3. Estructuras de decisión (if, switch, ternarios)

//Implementa una función que clasifique un número en positivo, negativo o cero usando if y switch.
// function numberType(num:number){
//   if(num > 0){
//     console.log(`${num} es positivo`)
//   }else if(num < 0){
//     console.log(`${num} es negativo`)
//   }
//   switch(num){
//     case 0:
//       console.log(`${num} es cero`);
//       break;
//     default:
//       break;
//   }
// }

// numberType(-2);

//---------- 4. Estructuras de iteración (while, for, foreach, map)

// const names: string[] = ["Ana", "Mahicol", "Nicolas"];
// //for (let i = 0; i < names.length; i++) {
// //  console.log(names[i]);
// //}

// names.forEach((n) => {
//   console.log(n)
// })

//---------- Estructuras de Datos y Funciones

//---------- 1. Arrays | Listas

//Tarea 1: Crea un array de números y calcula la suma de todos sus elementos utilizando un metodo reduce.

// const numbers: number[] = [1, 2, 3, 4, 5, 6];

// const sum: number = numbers.reduce((operator, current) => {
//   return operator += current;
// })

// console.log(sum);

//Tarea 2: Implementa una función que reciba un array de strings y retorne la concatenación de todos los elementos.

// function concatString(cadenas: string[]): string{
//   return cadenas.join(" ")
// }

// const cadenas: string[] = ["Hola", "Mundo", "TypeScript"];

// console.log(concatString(cadenas));

//Tarea 3: Define un array de objetos User con propiedades id y name, e imprime el nombre de cada usuario en consola.

// type User = {
//   id: number;
//   name: string;
// }

// const users: User[] = [
//   { id: 1, name: "Ana" },
//   { id: 2, name: "Mahicol" },
//   { id: 3, name: "Nicolas" }
// ]

// users.forEach((u) => {
//   console.log(u.name);
// })

//Tarea 4: Implementa una función que reciba un array de números y retorne el mayor valor.

//opt 1

// const numbers = [111, 22, 312, 4.5]

// function nunMaxWithMath(numbers: number[]): number {
//   return Math.max(...numbers);
// }

// console.log("Numero max del array (con math): ", nunMaxWithMath(numbers))

//opt 2

// function nunMaxWithReduce(numbers: number[]): number {
//   return numbers.reduce((max, current) => {
//     return max > current ? max : current;
//   });
// }

// console.log("Numero max del array (con reduce): ", nunMaxWithReduce(numbers))

//---------- 2. Objetos

//Tarea: Define un objeto Car con propiedades marca, modelo y año. Crea una instancia de Car e imprime sus propiedades en consola.

// interface Car {
//   brand: string;
//   model: string;
//   year?: number;
//   //si agrego "?" indico que ese atributo puede incluirse o no, opcional
// }

// const carOne: Car = {brand: "BMW",
//   model: "M3 RACING",
//   year: 2022
// };

// console.log("Marca: ", carOne.brand, "Model: ", carOne.model, "Year: ", carOne.year );

//Tarea 2: Con base en el objeto Car, crea una clase que posea un metodo estatico que reciba un objeto
//Car y retorne un string con la información del carro.

//Aqui se usa la interface y la instancia de car en la anterior tarea

// class UtilsCars{
//   // Contructores con TypeScript
//   // brand: string;
//   // model: string;
//   // year: number;
//   // constructor(car:Car){
//   //   this.brand = car.brand
//   //   this.model = car.model
//   //   this.year = car.year
//   // }

//   static getCarInfo(car: Car): String{
//     return `Marca: ${car.brand}, Modelo: ${car.model}, Año: ${car.year}`;
//   }
// }

// console.log(UtilsCars.getCarInfo(carOne))

//Tarea 3: Implementa una función que reciba un objeto Car y retorne un nuevo objeto con las mismas propiedades, pero con el año incrementado en 1.

//Aqui se usa la interface y la instancia de car en las anteriores tarea

// function increaseYearCar(car: Car): Car{
//   return {
//     ...car,
//     year: car.year + 1
//   }
// }

// const UpdatedCar: Car = increaseYearCar(carOne);
// console.log(UtilsCars.getCarInfo(UpdatedCar))

//---------- 3. Funciones

// Tarea: Implementa una función que reciba un array de números y retorne el mayor valor.

// function nunMaxWithReduce(numbers: number[]): number {
//   return numbers.reduce((max, current) => {
//     return max > current ? max : current;
//   });
// }

// Tarea 2: Implementa una funcion que reciba rest parameters y retorne error si almenos uno de los parametros pasados no es del tipo de los
// dos primeros parametros. Asegurarse que los dos primeros parametros sean del mismo tipo.

// function validateType(parameter1: any, parameter2: any, ...resParams: any[]) {
//   if (typeof parameter1 !== typeof parameter2) {
//     throw new Error(`Los dos primeros parametros no son del mismo del tipo\n${typeof parameter1}\n${typeof parameter2}`);
//   }

//   for (let param of resParams) {
//     if (typeof param!== typeof parameter1) {
//       throw new Error(`Almenos uno de los parametros restantes no es del mismo del tipo\n${typeof param} !== tipo valido:${typeof parameter1}`);
//     }
//   }
// }

// try {
//   validateType(1, "2", 3, 4, 5, 6);
// } catch (error) {
//   console.log(error);
// }

/* Tarea 3: Define una funcion que reciba una matriz cuadrada de numeros como parametros y devuelva 
la matriz gira 90 grados en sentido horario. (2 Riwi points) */

// const matriz:number[][] = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// function matrizTranspuesta(matriz: number[][]):number[][] {
//   let matrizTranspuesta:number[][] = matriz.map((e) => e.slice());
//   for(let i = 0; i < matriz.length; i++){
//     for(let j = matriz.length -1; j >= 0; j--){
//       matrizTranspuesta[i][matriz.length - 1 - j] = matriz[j][i];
//       console.log(matriz[j][i]);
//     }
//   }
//   return matrizTranspuesta;
// }

// console.log("Matriz\n", matriz, "\nMatriz transpuesta\n", matrizTranspuesta(matriz))
