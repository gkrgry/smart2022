import faker from '@faker-js/faker'; //영어
import faker_ko from '@faker-js/faker/locale/ko';
import './App.css';
import UserCard from './components/UserCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
const userDatas = []

  while(userDatas.length < 5){
    userDatas.push({
      avatar: faker.image.avatar(),
      name: `${faker.name.lastName()} ${faker_ko.name.firstName()}`,
      email: faker.internet.email(),
      jobName: faker.name.jobTitle(),
      phoneNo: faker_ko.phone.phoneNumber()
    })
  }


function App() {
  // props  부모에게 받아서 쓰는것
  // state 나 자기 자신에서 선언해서 쓰는것
  const [useDarkMode, setUseDarkMode] = useState(true); //디폴트가 true
  const [count, setCount] = useState(0);
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
  
  const userCards = userDatas.map((userData, idx) => {
    return <Grid item xm={2} sm={2} md={4}>
      <UserCard userData={userData} idx={idx} />
      </Grid>
  })
  return (
   
    <ThemeProvider theme={createTheme({
      palette: {
        mode: useDarkMode? 'dark' : 'light',
      },
    })
  }>
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
      >

      </Switch>
      <Container maxWidth="lg" sx={{p:1}}>
      <Grid container spacing={{xs:2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
        {userCards}
      </Grid>
    </Container>
    </Box>
  
  </ThemeProvider>
  );
}

export default App;
