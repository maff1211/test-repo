// const nom = "mois";
// const num2 = 50;
// const num3 = 100;

// const posibleNom = "aaaa";

// if (nom != posibleNom) {
//     console.log("los nombres no son iguales");
// } else {
//     console.log("los nombres son iguales");
//  }

// const num = 36;
// const num1 = 40;
// const ope = "resta";
// if (ope!="suma") {
//     console.log(num+num1);
// } else {
//     console.log(num-num1);
// }

// console.log(calcularCiclosGrupoDetalle());
 
// function calcularCiclosGrupoDetalle() {
//     const iTotalHorasCertificado = parseFloat(240);
//     const nHorasCiclo = parseFloat(80.00);
//     const nUnidades = 2;

//     return iTotalHorasCertificado / nHorasCiclo / nUnidades;
// }
  
// var d = new Date('2022-07-1');
// d.setMonth(d.getMonth() + 8);

// console.log(d);


const data1 = {
    id: 1,
    name: 'lucho'
};

const data2 = JSON.parse(JSON.stringify(data1));
data2.ape = 'lasdasd'

console.log('data1',data1);
console.log('data2',data2);