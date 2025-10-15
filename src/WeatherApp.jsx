import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import {useState} from "react"

function WeatherApp(){
    let [info , setInfo] = useState({
        city:"Jaipur",
        feelsLike: 22.4,
        temp:22.62,
        tempMin: 22.62,
        tempMax: 22.62,
        humidity: 56,
        pressure: 1011,
        weather: "haze"
    });
    let updateInfo = (result)=>{
        setInfo(result);
    }
    return <div>
        <h2>React Weather App</h2>
        <SearchBox updateInfo={updateInfo}></SearchBox>
        <br></br>
        <hr></hr>
        <InfoBox info={info}></InfoBox>
    </div>
}

export default WeatherApp