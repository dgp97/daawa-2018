exports.replace = function(objetivo, reemplazos){
    var param_encontrados = objetivo.match(/%(.*?)%/g);
    if(param_encontrados){
        var nombre_param = null,
            varlor_reemplazo = null;
        
        for (var i=0; i<param_encontrados.length; i++){
            nombre_param = param_encontrados[i].replace(/%/g, '');
            varlor_reemplazo = reemplazos[nombre_param];
            
            objetivo = objetivo.replace(param_encontrados[i], varlor_reemplazo);
        }
    }
    return objetivo;
}