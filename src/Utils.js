import faker from '@faker-js/faker'; //영어
import faker_ko from '@faker-js/faker/locale/ko';

    const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);//ceil 올림처리
    max = Math.floor(max);//floor 내림처리
    return Math.floor(Math.random() * (max - min) + min);//random 0~0.999.... 
    }
  
    
  
    export const makeUserDatas = (count) =>{ //export 다른쪽으로 내보서 쓰겠습니다.
        const userDatas = []

        while(userDatas.length < count){
            userDatas.push({
              avatar: `images/${getRandomIntInclusive(1,5)}.jpg`,
              name: `${faker.name.lastName()} ${faker_ko.name.firstName()}`,
              email: faker.internet.email(),
              jobName: faker.name.jobTitle(),
              phoneNo: faker_ko.phone.phoneNumber()
            })
          }
          
        return userDatas;
    }

    export const paginate = (array, pageSize, pageNumber) => {
      return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    };