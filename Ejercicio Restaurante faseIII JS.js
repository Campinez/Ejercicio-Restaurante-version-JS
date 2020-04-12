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

var cuenta = 0;
for (i=0; i<menuComensal.length;i++){
    for (var z=0; z<menu.length;z++){
        if(menuComensal[i]==menu[z]){
        cuenta= cuenta+precio[z];
        }
    }
}
alert("El precio de la comilona asciende a " + cuenta + " €. Y lo vas a pagar TU.")


//document.write(menu);
//document.write(precio);
//var menu =["Ensalada", "Sopa", "Dorada al horno", "Filete al café París", "Mandarinas"];
//var precio = [15,12,25,38,99];



