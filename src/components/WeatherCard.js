import React, {useState, useEffect} from 'react';
import { Typography } from '@mui/material';
import { weather_mapping_data,cityLatLon } from '../dataset/WeatherData';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function WeatherCard(props) {
    const {cityName} = props;
    
    const defaultCityName = localStorage.getItem(cityName+'_city') || "부산";
  const [weatherData, setWeatherData] = useState(null);
  const [apiError, setApiError] = useState(null);
  
  const [selectedCityDate, setSelectedCityData] = useState(cityLatLon.find(data => data.name === defaultCityName));



  const selectHandleChange = (event) => {
    console.log( event.target.value);
    const foundCity = cityLatLon.find(element => element.name === event.target.value);
    setSelectedCityData(foundCity)
    localStorage.setItem(cityName+'_city', foundCity.name);
  }

  useEffect(() => {
    const cityName = selectedCityDate.name;
    const cityGetDate = cityName + "_저장시간"
    const flowTime = Date.now() - localStorage.getItem(cityGetDate);
    
     //현재시간 - 로컬스토리에 저장한 시간 = 로컬스토리제에 저장한 시간으로부터 흘러간 시간이 나옴
    // 흘러간 시간이 10분 미만이면 로컬스토리지에 저장한 날씨데이터를 활용
    // 흘러간 시간이 10분 이상이면 openAPI 호출
    console.log(flowTime);
    if(flowTime > 600000){
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityDate.lat}&lon=${selectedCityDate.lon}&lang=kr&units=metric&&appid=e3e4cfbebd376feeec6e33c75454a739`
          ).then((res) => {
            console.log("api 호출")
            localStorage.setItem(cityName, JSON.stringify(res.data));
            localStorage.setItem(cityGetDate, Date.now());
            setWeatherData(res.data);
          }).catch(error => {
            setApiError(error);
          })
    }else{
      setWeatherData(JSON.parse(localStorage.getItem(cityName)));
    }
  }, [selectedCityDate]);

  const makeWeatherInfo = () => {
    const { temp, feels_like, temp_max, temp_min, humidity } = weatherData.main;
    const { main, icon } = weatherData.weather[0];
    // weather_mapping_data[main]
    // weather_mapping_data.Clear
    const parseWeatherData = weather_mapping_data[main]
      ? weather_mapping_data[main]
      : weather_mapping_data['Etc'];

    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
      <Grid item xs={1} sm={2} md={4}>
          <FormControl>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <InputLabel id="selected-city-label">날씨</InputLabel>
                    <Select
                      labelId="selected-city-label"
                      id="selected-city"
                      value={selectedCityDate.name}
                      label="도시"
                      onChange={selectHandleChange}>
                      {cityLatLon.map((city)=> (<MenuItem value={city.name}>{city.name}</MenuItem>))}
                    </Select>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {`현재날씨: ${parseWeatherData.name}`}
                </Typography>
                <parseWeatherData.icon sx={{ fontSize: 125, color: 'yellow' }} />
                    
                    <Typography>{`현재온도: ${temp}℃ 체감온도: ${feels_like}℃`}</Typography>
                    <Typography>
                     {`최저기온: ${temp_min}℃ 최고기온: ${temp_max}℃ 습도: ${humidity}%`}
                    </Typography>
              </CardContent>
            </CardActionArea>
         </Card>

              
        
      </FormControl>
        
      </Grid>
    );
  };

  return (
    <>
      {apiError ? (
        <Typography>{apiError.message}</Typography>
      ) : weatherData ? (
        makeWeatherInfo()
      ) : (
        <Typography>날씨 정보 없음.</Typography>
      )}
    </>
  );
}

export default WeatherCard;