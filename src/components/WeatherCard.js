import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import {weather_mapping_data} from "../dataset/weatherData";


function WeatherCard(props){
    const {weatherData, apiError} = props;
    
    const makeWeatherInfo = () =>{
        const {temp, temp_min, temp_max, feels_like, humidity} = weatherData.main;
        const {main, icon} = weatherData.weather[0];
        console.log(weather_mapping_data[main]);
        
        const parseWeatherData =weather_mapping_data[main] ? weather_mapping_data[main] : weather_mapping_data["Mist"]

        const iconUrl = "http://openweathermap.org/img/wn/";
        return <Box sx={{
            bgcolor: 'Background.default',
            color: 'text.primary',
            p: 1,
        }}>
            <Typography>{`현재날씨: ${parseWeatherData.name}`}</Typography>
            <parseWeatherData.icon sx={{fontSize: 125}}/>
            <img src={iconUrl+parseWeatherData.icon+'@2x.png'} />
            <Typography>{`현재온도: ${temp}℃ 체감온도: ${feels_like}℃ `}</Typography>
            <Typography>{`최저기온: ${temp_min}℃ 최고기온: ${temp_max}℃ 습도 : ${humidity} %`}</Typography>
        </Box>
           
    }
    
    return <>
        {apiError ?
            <Typography>{apiError.message}</Typography>
            :
            weatherData ?
            makeWeatherInfo()
                
                :
                <Typography>날씨정보 없음</Typography>
        }
    </>
}

export default WeatherCard;