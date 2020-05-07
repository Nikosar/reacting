import reducer from "../reducer";
import {PROCESSORS, VIDEO_CARDS} from "../../../components/constants";
import {ADD_COMPONENT_TO_CONFIGURATION, REMOVE_COMPONENT_FROM_CONFIGURATION} from "../actionTypes";


describe('configuration reducer', () => {

    let state = undefined;

    it('should add and remove from configuration', () => {
        addComponentToState(processor1, PROCESSORS);
        addComponentToState(processor2, PROCESSORS);
        addComponentToState(video_card, VIDEO_CARDS);

        expect(state[PROCESSORS].length).toBe(2);
        expect(state[VIDEO_CARDS].length).toBe(1)

        removeComponent(processor2.id, PROCESSORS);

        expect(state[PROCESSORS].length).toBe(1);
        expect(state[VIDEO_CARDS].length).toBe(1);

        expect(state[PROCESSORS][0]).toEqual(processor1);

    });

    function addComponentToState(component, componentType) {
        state = reducer(state, {
            type: ADD_COMPONENT_TO_CONFIGURATION,
            component,
            componentType: componentType
        });
    }

    function removeComponent(id, componentType) {
        state = reducer(state, {
            type: REMOVE_COMPONENT_FROM_CONFIGURATION,
            id: id,
            componentType: componentType
        });
    }

    it("must calculate summary", () => {

    })

});

const video_card = {
    id: 5
}

const processor2 = {
    id: 10
}

const processor1 = {
    "id": 5752,
    "model": "3200G OEM",
    "producer": {
        "id": 2,
        "name": "AMD"
    },
    "ekatalogId": 1594657,
    "ekatalogLink": "/AMD-3200G-OEM.htm",
    "prices": [
        {
            "id": 2487,
            "componentId": 5752,
            "minPrice": 6203,
            "maxPrice": 7500,
            "dateAdd": "2019-07-12"
        }
    ],
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
    "name": "3200G OEM"
};