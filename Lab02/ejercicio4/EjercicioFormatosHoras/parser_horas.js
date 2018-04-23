function parse_horas(req){
    
    var date=new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    
    
    var primerF= h+":"+m+":"+s;
    if(h>12){
    var segundoF= (h-12)+":"+m+":"+s;
    }
    else{
    var segundoF= h+":"+m+":"+s;
    }
    return{
        primerF: primerF,
        segundoF: segundoF,
        
    };
}
module.exports.parse_horas = parse_horas;