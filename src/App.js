import faker from '@faker-js/faker'; //영어
import faker_ko from '@faker-js/faker/locale/ko';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function App() {
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

  const userCards = userDatas.map((userData, idx) => {
    return <Card key={idx} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={userData.avatar}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            이름 : {userData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            직업 : {userData.jobName}<br/>
            Email : {userData.email}<br/>
            phone : {userData.phoneNo}<br/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    // return <div key={idx}>
    // <h4>{userData.name}</h4>
    // <img src={userData.avatar} alt="페이커 이미지 입니다."></img>
    // <h5>{userData.email}</h5>
    //     {userData.phoneNo} <br/>
    //     {userData.jobName}
    // </div>
  })


  
  return (
    <div className="App">
      
        {userCards}
      
    </div>
  );
}

export default App;
