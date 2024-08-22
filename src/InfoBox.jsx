import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){

    const HOT_URL="https://t4.ftcdn.net/jpg/05/18/43/73/360_F_518437397_j4c3cOSYK54AjCis5muIjPaHw2KBTCeH.jpg";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=is&k=20&c=GMlTyTFSxiKCiWyDI-NjFFN0RX6Z5yzRbdR3ThuJEyA=";
    return(
        <div className="InfoBox">
            <div className="card-Container">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                 {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Temperature={info.temp}&deg;C</p>
                <p>Humidity={info.humidity}</p>
                <p>Min Temp={info.tempMin}</p>
                <p>Max Temp={info.tempMax}</p>
                <p>The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</p>
            </Typography>
            </CardContent>
            </Card>
            </div> 
        </div>
    )
}