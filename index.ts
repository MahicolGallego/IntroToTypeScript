//1. Personalized type

type Product = {
  id: number;
  name: string;
  precio: number;
};

function isNumPair(num:number):boolean{
  return num % 2 === 0;
}

function numberType(num:number){
  if(num > 0){
    console.log(`${num} es positivo`)
  }else if(num < 0){
    console.log(`${num} es negativo`)
  }
  switch(num){
    case 0:
      console.log(`${num} es cero`);
      break;
    default:
      break;
  }
}


const a:number = 8;

const validate: boolean = isNumPair(a);

console.log(validate);
numberType(-2);


const names: string[] = ["Ana", "Mahicol", "Nicolas"];
//for (let i = 0; i < names.length; i++) {
//  console.log(names[i]);
//}

names.forEach((n) => {
  console.log(n)
})