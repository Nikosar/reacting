import PropTypes from 'prop-types'
import React from "react";

const ComponentProperties = ({component}) => {

    // const getAddedProps = (obj, path) => (
    //     path.split('+').reduce((acc, path) => {
    //         const descendantProp = getDescendantProp(obj, path);
    //         return descendantProp ? acc + " " + descendantProp : acc
    //     }, "")
    // );
    // const getDescendantProp = (obj, path) => (
    //     path.split('.').reduce((acc, part) => acc && acc[part], obj)
    // );

    const allObjectProps = () => {
        return Object.keys(component)
            .filter(k => component[k] && typeof component[k] !== 'object')
            .filter(k => !k.startsWith('ekatalog'))
            .filter(k => !k.startsWith('name'))
            .map((k) =>
                <p key={k + component.id} className='short_info'>{k + ': ' + component[k]}</p>
            )
    };

    let price = component.prices && component.prices[0];

    return (
        <div>
            <a href={`http://www.e-katalog.ru/${component.ekatalogLink}`}>
                <h4>{component.producer.name + component.model}</h4></a>
            {
                allObjectProps()
            }
            {
                //price:
                price && " price: " + price.minPrice
            }
        </div>
    )
};

ComponentProperties.propTypes = {
    component: PropTypes.object.isRequired,
    renderedProps: PropTypes.array
};

export default ComponentProperties;