import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ComponentList from "../index";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {PROCESSORS} from "../../constants";
import UniComponent from "../Component";

Enzyme.configure({adapter: new Adapter()})

const mockStore = configureMockStore([thunk]);


describe('component list', () => {
    it('should render components', () => {
        const store = mockStore(mockState);
        const component = mount(<ComponentList store={store}/>);
        expect(component.find(UniComponent)).toHaveLength(2)
        expect(component.find(UniComponent).first().props().component.id).toEqual(5752)
    })
})


const mockState = {
    component: {
        componentType: PROCESSORS,
        components: [{
            "id": 5752,
            "model": "3200G OEM",
            "producer": {
                "id": 2,
                "name": "AMD"
            },
            "ekatalogId": 1594657,
            "ekatalogLink": "/AMD-3200G-OEM.htm",
            "lastPrice": {
                "id": 5752,
                "minPrice": 6203,
                "maxPrice": 7500,
                "dateAdd": "2019-07-12"
            },
            "socket": {
                "id": 57,
                "name": "AMD AM4"
            },
            "clock": 3600000000,
            "clockTurbo": 4000000000,
            "cores": 4,
            "threads": 4,
            "techprocess": 1.2000000000E-8,
            "series": {
                "id": 4,
                "name": "Ryzen 3"
            },
            "architecture": null,
            "tdp": 65,
            "maxTemp": 95,
            "multiplier": 36,
            "maxMemory": null,
            "firstLevelCache": 384000,
            "secondLevelCache": 2048000,
            "thirdLevelCache": 4000000,
            "passmark": null,
            "name": "3200G OEM",
            "_links": {
                "self": {
                    "href": "http://localhost:8080/processors/5752"
                },
                "processor": {
                    "href": "http://localhost:8080/processors/5752"
                },
                "instructions": {
                    "href": "http://localhost:8080/processors/5752/instructions"
                },
                "prices": {
                    "href": "http://localhost:8080/processors/5752/prices"
                }
            }
        }, {
            "id": 5753,
            "model": "3200G BOX",
            "producer": {
                "id": 2,
                "name": "AMD"
            },
            "ekatalogId": 1565456,
            "ekatalogLink": "/AMD-3200G-BOX.htm",
            "lastPrice": {
                "id": 5753,
                "minPrice": 7037,
                "maxPrice": 8150,
                "dateAdd": "2019-07-12"
            },
            "socket": {
                "id": 57,
                "name": "AMD AM4"
            },
            "clock": 3600000000,
            "clockTurbo": 4000000000,
            "cores": 4,
            "threads": 4,
            "techprocess": 1.2000000000E-8,
            "series": {
                "id": 4,
                "name": "Ryzen 3"
            },
            "architecture": null,
            "tdp": 65,
            "maxTemp": 95,
            "multiplier": 36,
            "maxMemory": null,
            "firstLevelCache": 384000,
            "secondLevelCache": 2048000,
            "thirdLevelCache": 4000000,
            "passmark": null,
            "name": "3200G BOX",
            "_links": {
                "self": {
                    "href": "http://localhost:8080/processors/5753"
                },
                "processor": {
                    "href": "http://localhost:8080/processors/5753"
                },
                "instructions": {
                    "href": "http://localhost:8080/processors/5753/instructions"
                },
                "prices": {
                    "href": "http://localhost:8080/processors/5753/prices"
                }
            }
        }],
        "_links": {
            "first": {
                "href": "http://localhost:8080/processors?page=0&size=2"
            },
            "self": {
                "href": "http://localhost:8080/processors{&sort}",
                "templated": true
            },
            "next": {
                "href": "http://localhost:8080/processors?page=1&size=2"
            },
            "last": {
                "href": "http://localhost:8080/processors?page=291&size=2"
            },
            "profile": {
                "href": "http://localhost:8080/profile/processors"
            },
            "search": {
                "href": "http://localhost:8080/processors/search"
            }
        },
        "page": {
            "size": 2,
            "totalElements": 583,
            "totalPages": 292,
            "number": 0
        }
    }
};
