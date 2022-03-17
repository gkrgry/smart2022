import faker from '@faker-js/faker'; //영어
import faker_ko from '@faker-js/faker/locale/ko';
import './App.css';

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

  const userCards = userDatas.map((userData) => {

    return <div>
    <h4>{userData.name}</h4>
    <img src={userData.avatar} alt="페이커 이미지 입니다."></img>
    <h5>{userData.email}</h5>
        {userData.phoneNo} <br/>
        {userData.jobName}
    </div>
  })


  
  return (
    <div className="App">
      
        {userCards}
      
    </div>
  );
}

export default App;
