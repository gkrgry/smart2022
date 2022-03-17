import faker from '@faker-js/faker'; //영어
import faker_ko from '@faker-js/faker/locale/ko';
import './App.css';
import UserCard from './components/UserCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
  
  const userCards = userDatas.map((userData, idx) => {
    return <Grid item xm={2} sm={2} md={4}>
      <UserCard userData={userData} idx={idx} />
      </Grid>
  })
  return (
    <Container maxWidth="lg" sx={{p:1}}>
      <Grid container spacing={{xs:2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
        {userCards}
      </Grid>
    </Container>
  );
}

export default App;
