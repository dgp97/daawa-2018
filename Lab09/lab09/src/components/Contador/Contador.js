import React, {Component} from 'react';

import classes from './Contador.css';

export default class Contador extends Component{
    state = {
        cont: this.props.valor

        
    }

    state = {
        cont: this.props.valor2
        
    }



    sumaHandler = () => {
        this.setState({
            cont: this.props.valor +  this.props.valor2
        });
    }
    
    
    aumentarHandler = () => {
        this.setState({
            cont: this.state.cont + 1
        });
    }
    resetHandler = () => {
        this.setState({
            cont: this.props.valor
        });
    }
    restaHandler = () =>{
        this.setState({
            cont: this.props.valor - this.props.valor2
        });
    }
    
     multiplicacionHandler = () =>{
        this.setState({
            cont: this.props.valor * this.props.valor2
        });
    }
    
    
    
    render(){
        let advertencia = (<p>Iniciamos con un número mayor a 5! </p>);
                           if(this.props.valor<=5) advertencia = null;
        return (<div className={classes.Contador}>
                <h1>Calculadora</h1>
                <p>Primer Numero: {this.props.valor}</p>
                <p>Segundo Numero: {this.props.valor2}</p>

                {advertencia}
                <p>Respuesta: {this.state.cont}</p>
                <button onClick={this.sumaHandler}>Suma</button>
                <button onClick={this.restaHandler}>Resta</button>
                <button onClick={this.multiplicacionHandler}>Multiplicacion</button>
                <button onClick={this.aumentarHandler}>Division</button>
                
                </div>)

                
        
    }
    
}