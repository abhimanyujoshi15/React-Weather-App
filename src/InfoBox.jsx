import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


function InfoBox({info}){
  let   INIT_URL = "https://images.unsplash.com/photo-1684636553231-7612951229d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhenklMjB3ZWF0aGVyJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
        let HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
        let RAIN_URL = "https://plus.unsplash.com/premium_photo-1666726664307-707a74015ca4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
        let COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q09MRCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000"
    return <div className="infoBox">
            <br></br>
            <h2>Weather Information</h2>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity>80 ?RAIN_URL: info.temp>15? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;{info.humidity>80 ?<ThunderstormIcon/>: info.temp>15? <SunnyIcon/>: <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature: {info.temp}&deg;</p>
          <p>Humidity: {info.humidity}</p>
          <p>Min_Temp: {info.tempMin}&deg;</p>
          <p>Max_Temp: {info.tempMax}&deg;</p>
          <p>Pressure: {info.pressure} hPa</p>
          <p>Feels Like: {info.feelsLike}&deg;</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
}
export default InfoBox