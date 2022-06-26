function Menu(){
    let nro_ejercicio = parseInt(
        prompt("Ingrese el numero de ejercicio que quiere ejecutar : \r\n 1. Suma. \r\n 2. Promedio de examenes. \r\n 3. Area de Rectangulo. \r\n 4. Area de Triangulo. \r\n 5. Area de Circunsferencia. \r\n 6. Horas Trabajadas. \r\n 7. Modista medidas en pulgadas. \r\n 8. Cambio de Soles a Dolares.")
        );
        if(isNaN(nro_ejercicio)){
            alert("porfavor ingresa valores");
        }  else {
            MenuEjercicios(nro_ejercicio)
        }
}
function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let valor1 =+(prompt("Ingrese el valor 1 a sumar : "));
            let valor2 =+(prompt("Ingrese el valor 2 a sumar: "));
            let suma=(valor1,valor2)=>(valor1+valor2);
            alert(suma(valor1, valor2));
            break;

        case 2:
            let ex1 =+(prompt("ingresa la primera nota: "));
            let ex2 =+(prompt("ingresa la segunda nota: "));
            let ex3 =+(prompt("ingresa la tercera nota: "));
            let ex4 =+(prompt("ingresa la cuarta nota: "));
            alert(eje2_calcularPromedio(ex1 , ex2 ,ex3 , ex4));
            break;

        case 3:
            let largo3=+(prompt("Ingrese largo"));
            let ancho3=+(prompt("Ingrese Ancho"));
            let areaRectangulo=(l3,a3)=>(l3*a3);
            alert(areaRectangulo(largo3,ancho3));
            break;    
        
        case 4:
            let base4=+(prompt("Ingrese base"));
            let altura4=(prompt("Ingrese altura"));
            let areaTriangulo=(b4,a4)=>(b4*a4);
            alert(areaTriangulo(base4,altura4));
            break;    

        case 5:
            let radio5=+(prompt("Ingrese Radio"));
            const pi=3.1416;
            let areaCircunsferencia=(r)=>(pi*(r*r)); 
            alert(areaCircunsferencia(radio5));
            break;    

        case 6:
            let ht=+(prompt("Ingrese Cantidad Horas trabajas"));
            let sh=40;
            let sueldosemanal=(ht,sh)=>(ht*sh)*7;
            alert(sueldosemanal(ht,sh));
            break;    

        case 7:
            let ct=+(prompt("Ingresar cantidad de Tela"));
            let cantidadTela=(ct)=>(ct*(1/0.0254));
            alert(cantidadTela(ct));
            break;
        
        case 8:
            let soles=+(prompt("Ingresa Monto a Cambiar S/."));
            let Cambio=(soles)=>(soles/3.70);
            alert(Cambio(soles));
            break;    
        }
        function eje2_calcularPromedio(ex1 , ex2 ,ex3 , ex4){
            if (isNaN(ex1) || isNaN(ex2) ||isNaN (ex3) ||isNaN (ex4)){
                return "por favor ingresa valor";
               } else{
                   return(ex1 + ex2 + ex3 + ex4)/ 4;
               }
         } 
         }