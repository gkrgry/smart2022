import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { makeUserDatas } from './Utils';
import UserCardList from './components/UserCardList';
import WeatherCard from './components/WeatherCard';
import Grid from '@mui/material/Grid';


const userDatas = makeUserDatas(5000);


function App() {


  const [useDarkMode, setUseDarkMode] = useState(true); //디폴트가 true
      // props  부모에게 받아서 쓰는것
    // state 나 자기 자신에서 선언해서 쓰는것

    
  


  const handleChange = (event) => {
    console.log(event);
    setUseDarkMode(useDarkMode? false:true);
    //setUseDarkMode(event.target.checked) 위와 같음
  }

  


  


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
          minHeight: '100%',
            bgcolor: 'background.default',
            color: 'text.primary',
            p: 1,
            }}>
      <Container maxWidth="lg" sx={{p:1}}>
        
        
        <Grid container spacing={{xs:2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
          <WeatherCard cityName="안양시" />
          <WeatherCard cityName="서울시" />
          <WeatherCard cityName="부산시" />
          
        </Grid>
     
      <Switch
      Checked={useDarkMode} 
      onChange={handleChange}
      inputProps={{'aria-label':'controlled'}}
      />
      
        <UserCardList userDatas={userDatas} />
      </Container>
    </Box>
  </ThemeProvider>
  );
}

export default App;
