import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react"
function SearchBox({updateInfo}){
    let URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "57da7f188d13687655f96461d477625b";
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let getWeatherInfo = async ()=>{
        let response = await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResp = await response.json();
        let result = {
            city: city,
            temp: jsonResp.main.temp,
            tempMin: jsonResp.main.temp_min,
            tempMax: jsonResp.main.temp_max,
            humidity: jsonResp.main.humidity,
            feelsLike: jsonResp.main.feels_like,
            pressure: jsonResp.main.pressure,
            weather: jsonResp.weather[0].description
        }
        console.log(result);
        return result;
    }
    let handleInput = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(error){
            setError(true)
        }
        
    }
    return <div>
        <br></br>
        <form>
            <TextField id="city" label="Enter City" variant="outlined" required value={city} onChange={handleInput}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit" onClick={handleSubmit}>Search</Button>
            <br></br>
            {error && <p style={{color:"red"}}>No such place found!</p>}
        </form>
    </div>
}

export default SearchBox