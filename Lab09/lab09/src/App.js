import React, { Component } from 'react';

import Contador from './components/Contador/Contador';

class App extends Component {
    render(){
        return (
        <Contador valor={2} 
                 valor2={13}
            />
        
        );
    }
}

export default App;
