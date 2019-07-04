import React from "react";

const Processor = ({component}) => {
    return <div className="container">
        <div className="row component_block">
            <ComponentLeftInfo name={(component.series ? component.series.name : " ") + '-' + component.model}
                               id={component.id}
                               clock={component.clock}
                               socket={component.socket.name}
                               turbo={component.clockTurbo}
                               cores={component.cores}
                               ekatalogLink={component.ekatalogLink}
            />
            <ComponentRightInfo price={component.prices.length !== 0 ? component.prices[0].minPrice : ''}
                                benchmark={component.passmark !== null ? component.passmark : ''}
                                benchmarkName={component.passmark !== null ? "Passmark" : ''}/>
        </div>
    </div>

};

const ComponentLeftInfo = ({name, id, clock, socket, turbo, cores, ekatalogLink}) => (
    <div className="col-lg-6">
        <a href={`http://www.e-katalog.ru/${ekatalogLink}`}><h4>{name}</h4></a>
        <p className='short_info'>Socket: {socket} Частота: {clock} ГГц Turbo: {turbo} ГГц Cores: {cores}</p>
    </div>
);

const ComponentRightInfo = ({price, benchmarkName, benchmark}) => (
    <div className="col-lg-6">
        <h5>{price + (price ? ' р.' : '')}</h5>
        <h5>{benchmarkName + (benchmark ? ': ' : '') + benchmark}</h5>
        <h5>{(price && benchmark) ? benchmarkName + '/цена: ' + (benchmark/price).toFixed(2) : ''}</h5>
        <div className="row">
            <button className="submit_button" type="submit">Использовать для сборки</button>
        </div>
    </div>
);

export default Processor;