import faker from '@faker-js/faker'; //영어
import faker_ko from '@faker-js/faker/locale/ko';
import './App.css';
import UserCard from './components/UserCard';


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
    return <UserCard userData={userData} idx={idx} />
  })
  return (
    <div className="App">
      
        {userCards}
      
    </div>
  );
}

export default App;
