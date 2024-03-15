let nombre=prompt("Ingrese su nombre")+":"
let menu="----------------MENU-------------------\n";
menu+="Desliza hacia abajo y seleccione un número del Menú:\n\n";
menu+="20. Para Finalizar tu Orden o Salir del Menú \n\n";
menu+="1. Hamburguesa doble carne\n";
menu+="2. Pizza Margarita\n";
menu+="3. Pizza 4 estaciones\n";
menu+="4. Tequeños\n";
menu+="------BEBIDAS------\n";
menu+="5. Limonada tradicional\n";
menu+="6. Jugo de maracuya\n";
menu+="7. Coca zero\n";
menu+="8. Sprite zero";


let codigo=0
const pedido=[]

function pedidoCliente(pedido,nombre){

    while(codigo!=20){

        codigo=parseInt(prompt(menu))

        if(codigo === 1){
            pedido.push("- Hamburguesa doble carne")
        }else if(codigo === 2){
            pedido.push("- Pizza Margarita")
        }else if(codigo === 3){
            pedido.push("- Pizza 4 estaciones")
        }else if(codigo === 4){
            pedido.push("- Tequeños")
        }else if(codigo === 5){
            pedido.push("- Limonada tradicional")
        }else if(codigo === 6){
            pedido.push("- Jugo de maracuya")
        }else if(codigo === 7){
            pedido.push("- Coca Zero")
        }else if(codigo === 8){
            pedido.push("- Sprite Zero")
        }else if(codigo === 20){
            alert(" Hemos registrado tu selección")
        }else{
            alert("El codigo que ingresaste no pertenece a ningun numero del menú")
        }
    }

    pedido.unshift(nombre)

    alert(pedido.join('\n'))

}

pedidoCliente(pedido,nombre)