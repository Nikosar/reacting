import React, {Component} from 'react';
import Filter from "../components/Filter";
import SortingBlock from "./SortingBlock";
import ComponentsBlock from "./ComponetsBlock";
import NavBar from "../components/NavBar";
import {Header} from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {components: [], entityName: ''};
    }

    render() {
        return (
            <div>
                <Header/>
                <NavBar/>
                <main>
                    <SortingBlock count={this.state.components.length}/>
                    <div className="container">
                        <div className="row">
                            <ComponentsBlock components={this.props.components}>Test</ComponentsBlock>
                            <Filter/>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}


export default App;
