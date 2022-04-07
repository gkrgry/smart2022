import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { makeUserDatas } from './Utils';
import UserCardList from './components/UserCardList';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import {cityLatLon} from './dataset/weatherData';

const userDatas = makeUserDatas(5000);


// axios.get("https://api.openweathermap.org/data/2.5/weather?lat=37.391109&lon=126.967785&lang=kr&units=metric&appid=e3e4cfbebd376feeec6e33c75454a739")
// .then((res) => {
//   console.log(res)
// }).catch((error)=>{
//   console.log(error)
// })

function App() {


  const [useDarkMode, setUseDarkMode] = useState(true); //디폴트가 true
      // props  부모에게 받아서 쓰는것
    // state 나 자기 자신에서 선언해서 쓰는것

    const [weatherData, setWeatherData] = useState(null);
    const [apiError, setApiError] = useState(null);
    const [selectedCityDate, setSelectedCityData] = useState({ name: "안양",lat: 37.391109,lon: 126.967785});



  const handleChange = (event) => {
    console.log(event);
    setUseDarkMode(useDarkMode? false:true);
    //setUseDarkMode(event.target.checked) 위와 같음
  }

  useEffect(() => {
    
  })

  useEffect(() => {
    const callApi = async () => {
      try {
        const result = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?lat=37.3943&lon=126.9568&lang=kr&units=metric&&appid=e3e4cfbebd376feeec6e33c75454a739',
        );
        setWeatherData(result.data);
      } catch (err) {
        setApiError(err);
      }
    };
    callApi();
    console.log('component did mount');
  }, []);


  //생명주기와 관련된 함수
  //아래 배열이 없으면 최초에 한번만 세팅
  useEffect(() => {
    console.log("render");
  },[])
  //useDarkMode가 들어가있니까 이 값이 변경될때 마다 세팅
  useEffect(() => {
    console.log("render");
  },[useDarkMode])
  

 




  return (
   
    <ThemeProvider theme={createTheme({
      palette: {
        mode: useDarkMode? 'dark' : 'light',
      },
    })
  }>
    <Box sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
            p: 1,
            }}>
        <WeatherCard weatherData={weatherData} apiError={apiError}/>
      </Box>
    <Box sx={{
    height: '100%',
    bgcolor: 'background.default',
    color: 'text.primary',
    p: 1,
    }}>
      <Switch
      Checked={useDarkMode} 
      onChange={handleChange}
      inputProps={{'aria-label':'controlled'}}
      />
      <Container maxWidth="lg" sx={{p:1}}>
        <UserCardList userDatas={userDatas} />
      </Container>
    </Box>
  </ThemeProvider>
  );
}

export default App;
