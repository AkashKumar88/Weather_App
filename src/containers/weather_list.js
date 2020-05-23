import React, {Component} from 'react';
import { connect } from "react-redux";
import _ from "lodash";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";
// import { removeList } from '../actions';
// import { bindActionCreators } from 'redux';

class WeatherList extends Component{

    removeHandler = (id) => {
        //console.log(id);
        //this.props.removeList(id);
    }

    renderWeather()  {
        //console.log(this.props.weather);
        return this.props.weather.map(cityData => {
            if(!cityData){
                return  (
                    <>
                    <tr className="name">
                        <td>Invalid City Name</td> 
                        <td>---</td>
                        <td>---</td>
                        <td>---</td>
                        {/* <td> <button>Delete</button></td> */}
                    </tr>
                    </>
                );
                // <div className="cart">
                //             <div className="cart-list">
                //                 <div className="cart-list-container">
                //                     <div className="name">City Not Found</div>
                //                 </div>
                                
                //             </div>
                //     </div>;
            }
            const id= cityData.city.id;
            // const temps = cityData.list.map(weather => weather.main.temp);
            const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => temp - 273);
            const pressures= cityData.list.map(weather => weather.main.pressure);
            const humidities= cityData.list.map(weather => weather.main.humidity);
            // const lon= cityData.city.coord.lon;
            // const lat= cityData.city.coord.lat;
            const { lon, lat }= cityData.city.coord;

            //console.log(temps);
            return (
                
                <tr key={id}>
                    {/* <td>{cityData.city.name}</td>  */}
                    <td><GoogleMap lon={lon} lat={lat}/></td> 
                    <td><Chart data={temps} color="orange" units="C"/></td>
                    <td><Chart data={pressures} color="green" units="hPa"/></td>
                    <td><Chart data={humidities} color="black" units="%"/></td>
                    {/* <td> <button onClick={() => this.removeHandler(id)}>Delete</button></td> */}
                </tr>
            );
         });

    }
    
    render(){
        //console.log(this.props.weather);
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temerature (degree C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                        {/* <th>Remove</th> */}
                    </tr>
                </thead>
                <tbody>
                    {this.renderWeather()}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather} 
}
// function mapStateToProps(state) {
//     return { weather: state.weather} 
// }
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ removeList: removeList }, dispatch);
// }

export default connect(mapStateToProps)(WeatherList);