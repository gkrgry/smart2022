import faker from '@faker-js/faker'; //영어
import faker_ko from '@faker-js/faker/locale/ko';
import './App.css';
import UserCard from './components/UserCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { useState } from 'react';
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
  // const [count,setCount] = useState("디폴트값"); 공식인데 a
  const [useDarkMode, setUseDarkMode] = useState(true); //디폴트가 true
  const [count, setCount] = useState(0);
  const handleButtonOnClick = () => {
    setCount(count + 1);
  }

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
