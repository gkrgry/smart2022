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
import Pagination from '@mui/material/Pagination';
const userDatas = []

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);//ceil 올림처리
  max = Math.floor(max);//floor 내림처리
  return Math.floor(Math.random() * (max - min) + min);//random 0~0.999.... 
  }


  while(userDatas.length < 5000){
    userDatas.push({
      avatar: `images/${getRandomIntInclusive(1,5)}.jpg`,
      name: `${faker.name.lastName()} ${faker_ko.name.firstName()}`,
      email: faker.internet.email(),
      jobName: faker.name.jobTitle(),
      phoneNo: faker_ko.phone.phoneNumber()
    })
  }

  const paginate = (array, pageSize, pageNumber) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }

function App() {
  const pageCountentCount = 9;


  // props  부모에게 받아서 쓰는것
  // state 나 자기 자신에서 선언해서 쓰는것
  const [useDarkMode, setUseDarkMode] = useState(true); //디폴트가 true
  const [pageNo, setPageNo] = useState(1);
  const [currentUserData, setCurrentUserData] = useState(paginate(userDatas, pageCountentCount, pageNo));


  const handleChange = (event) => {
    console.log(event);
    setUseDarkMode(useDarkMode? false:true);
    //setUseDarkMode(event.target.checked) 위와 같음
  }
  const handleChangePageNo = (event, value) => {
    setPageNo(value);
    setCurrentUserData(paginate(userDatas, pageCountentCount, value))
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
  

  const userCards = currentUserData.map((userData, idx) => {
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
        <Pagination 
        color="primary" 
        count={Math.ceil(userDatas.length / pageCountentCount)}
        page={pageNo}
        onChange={handleChangePageNo}
        />
      </Container>
    </Box>
  </ThemeProvider>
  );
}

export default App;
