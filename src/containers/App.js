import React, {Component} from 'react';
import Filter from "../components/Filter";
import SortingBlock from "../components/SortingBlock";
import VariableComponentsBlock from './VariableComponentsBlock'
import NavigationBar from "./NavigationBar";
import {Header} from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavigationBar/>
                <main>
                    <SortingBlock count={10}/>
                    <div className="container">
                        <div className="row">
                            <VariableComponentsBlock/>
                            <Filter/>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}


export default App;
