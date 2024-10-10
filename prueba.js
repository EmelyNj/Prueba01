


//#region Desestructuración

//Definimos el objeto 

const Producto = {
    Nombre: "Pepito",
    Apellido: "De la o",
    Sueldo: 1200
}
//Mostramos el contenido del objeto 
//console.log(Producto.Nombre+" "+ Producto.Apellido+" "+Producto.Sueldo)
//console.log(`Empleado :${Producto.Nombre}${Producto.Apellido} | ${Producto.Sueldo}`)

let { Nombre, Apellido, Sueldo } = Producto
console.log("Empleado ---> " + Nombre + " " + Apellido + " | " + Sueldo)
//#endregion

//#region UNIR DOS OBJETOS

const Productos = {
    Id: "0001",
    Nombre: "Chocolate",
    Precio: 1.50
}

const Clientes = {
    Codigo: "0001",
    Nombre: "Pepito",
    Apellido: "Alcantara"
}

//Unimos los objetos
// const Compra=Object.assign(Productos,Clientes);
// let {Codigo,Nombre,Precio}=Compra
// console.log("Compra --->  "+Codigo+" "+Nombre+" "+Precio)

// Los tres puntos es decirle que tome una copia del objeto
const Compra = {
    Productos: { ...Productos },
    Clientes: { ...Clientes }
}

console.log(Compra.Clientes.Codigo + " " + Compra.Clientes.Nombre + " " + Compra.Productos.Nombre
    + " " + Compra.Productos.Precio
)

//#endregion

//#region Desestructuración de Array


const secciones = ["Primero Software", "Primero General", "Segundo Conta"]

Destructiración
const [x1, x2, x3] = secciones
console.log(x1)
 console.log(x3)

//Recorremos el arreglo

secciones.forEach(function(item){
    console.log(item)
})

//USANDO MAP
secciones.map(function(item){
    console.log(item)
})


//#endregion

//#region FUNCIONES


function Sumar(x, y=100){
    console.log(x+y)
}
Sumar(4,7);


//#endregion

//#region FUNCIONES DE FLECHAS


const Sumar=(num1, num2)=>{
    console.log(num1+num2)
}

Sumar(55,55);

const Sumar2=()=>4+6;
console.log(Sumar2());

//#endregion




