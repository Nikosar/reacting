import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css'
import Header from "../Header";
import Content from "../Content";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <Content/>
                </main>
            </div>
        );
    }
}


export default App;
