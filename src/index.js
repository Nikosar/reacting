import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';

const ComponentLeftInfo = props => (
    <div className="col-lg-6">
        <a href={'http://localhost:8080/processor?id=' + props.id}><h4>{props.name}</h4></a>
        <h6>{props.clock}</h6>
    </div>
);

const ComponentRightInfo = props => (
    <div className="col-lg-6">
        <h4>{props.price}</h4>
        <h4>{props.benchmark}</h4>
        <div className="row">
            <button className="submit_button" type="submit">Использовать для сборки</button>
        </div>
    </div>
);

const Component = props => (
    <div className="container">
        <div className="row component_block">
            <ComponentLeftInfo name={props.component.series.name + '-' + props.component.model}
                               id={props.component.id}
                               clock={props.component.clock}/>
            <ComponentRightInfo price={props.component.price}
                                benchmark={props.component.benchmark}/>
        </div>
    </div>
);

const Components = props => {
    const componentsBlock = [];
    props.components.forEach((component) => {
        if ((component.series.name + '-' + component.model).toLowerCase().indexOf(props.filterText.toLowerCase()) !== -1) {
            componentsBlock.push(
                <Component component={component}/>
            )
        }
    });
    return <div className="col-lg-8">{componentsBlock}</div>;
};

const HeadBlock = props => (
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-2"><h1>{"Процессоры"}</h1></div>
            <div className="col-lg-1"/>
            <div className="col-lg-2"><h4>Найдено: {props.count}</h4></div>
        </div>
        <div className="container">
            <div className="row align-items-lg-center">
                <div className="col-lg-8">
                    <ul className="list-inline ">
                        <li className="list-inline-item">Сортировать по:</li>
                        <li className="list-inline-item"><a href="#">цене</a></li>
                        <li className="list-inline-item"><a href="#">популярности</a></li>
                        <li className="list-inline-item"><a href="#">passmark</a></li>
                        <li className="list-inline-item"><a href="#">passmark/цена</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.onFilterTextChange = this.onFilterTextChange.bind(this);
    }

    onFilterTextChange(event) {
        // console.log(this.props);
        this.props.onFilterTextChange(event.target.value);
    }

    render() {
        return (
            <div className="col-lg-4">
                <div className="filter_block">
                    <div className="row justify-content-around">
                        <div className="col-lg-4">
                            <h4>Фильтр</h4>
                        </div>
                        <div className="col-lg-6">
                            <button className="submit_button" type="submit">Применить</button>
                        </div>
                    </div>
                    <div className="row">
                        <input type="text" className="filter_search" onChange={this.onFilterTextChange}/>
                    </div>
                </div>
            </div>
        );
    }
}


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filterText: ''};
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(text) {
        this.setState({
            filterText: text
        });
    }

    render() {

        return <main>
            <HeadBlock count={this.props.components.length}/>
            <div className="container">
                <div className="row">
                    <Components filterText={this.state.filterText}
                                components={this.props.components}>Test</Components>
                    <Filter onFilterTextChange={this.handleFilterTextChange}/>
                </div>
            </div>
        </main>
    }
}

$.ajax({
    url: "http://localhost:8080/processors",
}).then(function (processors) {
    ReactDOM.render(<Main components={processors}/>, document.getElementById('root'));
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
