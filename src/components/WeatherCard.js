import React, {useState, useEffect} from 'react';
import { Typography } from '@mui/material';
import { weather_mapping_data,cityLatLon } from '../dataset/WeatherData';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function WeatherCard(props) {
    const {id} = props;
  const [weatherData, setWeatherData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [selectedCityDate, setSelectedCityData] = useState({ name: "안양",lat: 37.391109,lon: 126.967785});

  const selectHandleChange = (event) => {
    console.log( event.target.value);
    const foundCity = cityLatLon.find(element => element.name === event.target.value);
    setSelectedCityData(foundCity)
    console.log(foundCity);
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
        <InputLabel id="selected-city-label">Age</InputLabel>
        <Select
          labelId="selected-city-label"
          id="selected-city"
          value={selectedCityDate.name}
          label="도시"
          onChange={selectHandleChange}
        >
          {cityLatLon.map((city)=> (<MenuItem value={city.name}>{city.name}</MenuItem>))}
        </Select>
      </FormControl>
        <Typography>{`현재날씨: ${parseWeatherData.name}`}</Typography>
        <parseWeatherData.icon sx={{ fontSize: 125, color: 'yellow' }} />
        <img src={iconUrl} alt="현재날씨 아이콘" />
        <Typography>{`현재온도: ${temp}℃ 체감온도: ${feels_like}℃`}</Typography>
        <Typography>
          {`최저기온: ${temp_min}℃ 최고기온: ${temp_max}℃ 습도: ${humidity}%`}
        </Typography>
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