import React,  {Component} from 'react';
//para querzconozq lq sintaxis
//empezaremos creando nuestros componentes
//un compoente tienes estados cuando tiene ciclo de vida

import UserCounter from '../../componentes/UserCounter/UserCounter';
import UserAdd from '../../componentes/UserAdd/UserAdd';
import UserUl from '../../componentes/UserUl/UserUl';

    


class UserList extends Component{
    render(){
        let usuarios = ['Diana', 'Yuli'];
        usuarios.push('Maria');
        
        return (
        <div> 
            <UserCounter counter={40}>/>
        </div>);
    }
                
            
            //si una varaible va variavar usar let sino cont
                

                
componentes exteies