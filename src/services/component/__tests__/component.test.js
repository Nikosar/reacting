import reducer from "../reducer";
import {PROCESSORS} from "../../../components/constants";
import {RECEIVE_COMPONENTS} from "../actionTypes";
import {receiveComponents} from "../actions";

describe('component reducer', () => {
    it('should give right state', () => {
        const newState = reducer(undefined, {
                type: RECEIVE_COMPONENTS,
                componentType: PROCESSORS,
                content: PROCESSORS_API_ANSWER
            }
        );
        expect(newState.components).toBe(PROCESSORS_API_ANSWER._embedded.processors)
        expect(newState.page).toBe(PROCESSORS_API_ANSWER.page)
        expect(newState._links).toBe(PROCESSORS_API_ANSWER._links)
    });
});

describe('component action', () => {
    it('should receive components', () => {
        const action_result = receiveComponents(PROCESSORS, PROCESSORS_API_ANSWER);
        expect(action_result.content).toBe(PROCESSORS_API_ANSWER);
    });
});


const PROCESSORS_API_ANSWER = {
    "_embedded" : {
        "processors" : [ {
            "id" : 5752,
            "model" : "3200G OEM",
            "producer" : {
                "id" : 2,
                "name" : "AMD"
            },
            "ekatalogId" : 1594657,
            "ekatalogLink" : "/AMD-3200G-OEM.htm",
            "lastPrice" : {
                "id" : 5752,
                "minPrice" : 6203,
                "maxPrice" : 7500,
                "dateAdd" : "2019-07-12"
            },
            "socket" : {
                "id" : 57,
                "name" : "AMD AM4"
            },
            "clock" : 3600000000,
            "clockTurbo" : 4000000000,
            "cores" : 4,
            "threads" : 4,
            "techprocess" : 1.2000000000E-8,
            "series" : {
                "id" : 4,
                "name" : "Ryzen 3"
            },
            "architecture" : null,
            "tdp" : 65,
            "maxTemp" : 95,
            "multiplier" : 36,
            "maxMemory" : null,
            "firstLevelCache" : 384000,
            "secondLevelCache" : 2048000,
            "thirdLevelCache" : 4000000,
            "passmark" : null,
            "name" : "3200G OEM",
            "_links" : {
                "self" : {
                    "href" : "http://localhost:8080/processors/5752"
                },
                "processor" : {
                    "href" : "http://localhost:8080/processors/5752"
                },
                "instructions" : {
                    "href" : "http://localhost:8080/processors/5752/instructions"
                },
                "prices" : {
                    "href" : "http://localhost:8080/processors/5752/prices"
                }
            }
        }, {
            "id" : 5753,
            "model" : "3200G BOX",
            "producer" : {
                "id" : 2,
                "name" : "AMD"
            },
            "ekatalogId" : 1565456,
            "ekatalogLink" : "/AMD-3200G-BOX.htm",
            "lastPrice" : {
                "id" : 5753,
                "minPrice" : 7037,
                "maxPrice" : 8150,
                "dateAdd" : "2019-07-12"
            },
            "socket" : {
                "id" : 57,
                "name" : "AMD AM4"
            },
            "clock" : 3600000000,
            "clockTurbo" : 4000000000,
            "cores" : 4,
            "threads" : 4,
            "techprocess" : 1.2000000000E-8,
            "series" : {
                "id" : 4,
                "name" : "Ryzen 3"
            },
            "architecture" : null,
            "tdp" : 65,
            "maxTemp" : 95,
            "multiplier" : 36,
            "maxMemory" : null,
            "firstLevelCache" : 384000,
            "secondLevelCache" : 2048000,
            "thirdLevelCache" : 4000000,
            "passmark" : null,
            "name" : "3200G BOX",
            "_links" : {
                "self" : {
                    "href" : "http://localhost:8080/processors/5753"
                },
                "processor" : {
                    "href" : "http://localhost:8080/processors/5753"
                },
                "instructions" : {
                    "href" : "http://localhost:8080/processors/5753/instructions"
                },
                "prices" : {
                    "href" : "http://localhost:8080/processors/5753/prices"
                }
            }
        } ]
    },
    "_links" : {
        "first" : {
            "href" : "http://localhost:8080/processors?page=0&size=2"
        },
        "self" : {
            "href" : "http://localhost:8080/processors{&sort}",
            "templated" : true
        },
        "next" : {
            "href" : "http://localhost:8080/processors?page=1&size=2"
        },
        "last" : {
            "href" : "http://localhost:8080/processors?page=291&size=2"
        },
        "profile" : {
            "href" : "http://localhost:8080/profile/processors"
        },
        "search" : {
            "href" : "http://localhost:8080/processors/search"
        }
    },
    "page" : {
        "size" : 2,
        "totalElements" : 583,
        "totalPages" : 292,
        "number" : 0
    }
}