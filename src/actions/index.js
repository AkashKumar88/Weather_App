import axios from 'axios';

const API_KEY= '9fb1dfcc2d2f2747c25314b90196c4b7';
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER= 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},in`;
    const request= axios.get(url);
    console.log('Request:', request);
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}

// import axios from 'axios';
// import Cookie from "js-cookie";
// const API_KEY= '9fb1dfcc2d2f2747c25314b90196c4b7';
// const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// export const FETCH_WEATHER= 'FETCH_WEATHER';
// export const REMOVE_ITEM= 'REMOVE_ITEM';

// export function fetchWeather(city){
//     const url = `${ROOT_URL}&q=${city},in`;
//     const request= axios.get(url);
//     console.log('Request:', request);
//     return{
//         type: FETCH_WEATHER,
//         payload: request
//     };
// }

// //  export const removeList = (id) => (dispatch, getState) => {
// //         dispatch({ type: REMOVE_ITEM, payload: id });
// //         const { weather } = getState();
// //         Cookie.set("weather", JSON.stringify(weather));
// // }

//  export function removeList(id) {
//       return  { type: REMOVE_ITEM, payload: id };
// }