var billete5 = 5;
var billete10 = 10;
var billete20 = 20;
var billete50 = 50;
var billete100 = 100;
var billete200 = 200;
var billete500 = 500;
var menu =[];
var precio = [];
var i;
var menuComensal = [];
for (i=0; i<5;i++){
    dato1= prompt("Introduce el nombre del plato:");
    dato2= parseInt(prompt("Introduce el precio del plato "+dato1));
    menu.push(dato1);
    precio.push(dato2);
};
document.write("Hoy en el menú disponemos de los siguientes platos: ");
for (i=0; i<menu.length;i++ ){
    document.write(menu[i]+" "+precio[i]+"€, ");
    console.log(menu[i]+" "+precio[i]+"€, ");
}

document.write("<br>");

var  eleccionCont=1;
while (eleccionCont === 1){
    var eleccion = prompt("Qué plato desea elegir? ");
    var check = false;
    for(i=0;i<menu.length;i++){
        if (eleccion==menu[i]){
        menuComensal.push(eleccion);
        check=true;
        }
    }
    if (check==false){
        alert("El plato "+eleccion+" no está disponible en el menú.")
    }
eleccionCont= parseInt(prompt("Desea usted pedir otro plato? 0-NO 1-SI"))
}



//document.write(menu);
//document.write(precio);




