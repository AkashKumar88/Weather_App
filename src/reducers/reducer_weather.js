import { FETCH_WEATHER } from "../actions";
export default function(state=[], action) {
    //console.log('Action receved', action);
    switch (action.type) {
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]);
            return [action.payload.data, ...state];
        // case REMOVE_ITEM:
        //     return [state.filter(cityData => cityData.city.id !== action.payload) ];
        default:
            return state;
    }
}


