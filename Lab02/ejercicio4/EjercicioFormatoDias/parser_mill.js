function parse_mill(fecha){
    var Dato= fecha;
    
    var fecha1= new Date().getTime();
    var fecha2 = new Date(fecha).getTime();
    var muestra='';
    if(fecha1>fecha2){
        var err = 'Error';
    }else{
        
        var operacion= (fecha2 - fecha1)/(1000*60*60*24);
        var rpta = Math. round(operacion*Math. pow(10,0))/Math. pow(10,0);
        var muestra = 'Faltan '+rpta+' días';
    }

    return{
        dias: muestra
    };
}
module.exports.parse_mill = parse_mill;