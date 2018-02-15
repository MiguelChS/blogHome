import * as React from 'react';
import {render} from 'react-dom';
import {Header} from 'blg-header';

class App extends React.Component {
    touch = ()=>{
        alert("hola Miguel")
    }

    render(){
        return(
            <div>
                <Header/>
            </div>
        )
    }
}



render(<App/>,document.getElementById("app"));
