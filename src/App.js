import { faker } from '@faker-js/faker';
import flower from './flower.jpg';
import './App.css';
const testData = [
  { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" ,
    imgUrl: "data:image/jpeg;base64,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"
},
  {text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Femonsstyle.tistory.com%2F421&psig=AOvVaw1I4ybv04ZgiG-dVEmM-0_y&ust=1646984069380000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiy0PWDu_YCFQAAAAAdAAAAABAI"
},
  {text: "Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit.",
   imgUrl: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.blog.naver.com%2Fseolyn2%2F150185740772&psig=AOvVaw1I4ybv04ZgiG-dVEmM-0_y&ust=1646984069380000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiy0PWDu_YCFQAAAAAdAAAAABAO" 
  } 
]
function App() {
  const h1Element = <h1>H1 제목 태그입니다.</h1>
  const imgElement = <img src={flower} className="App-logo" alt="logo" />
  return (
    <div className="App">
      <header className="App-header">
        {h1Element}
        {imgElement}
        <p>
          한글로 바꿔 주세용 <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {testData.map((contents)=>{
          contents.text
          contents.imgUrl
          return <div>
            <img src={faker.image.avatar()}></img>
            <img src={contents.imgUrl} alt="꽃사진"/>
          {contents.text}
          <img src={faker.image.cats()} />
          </div>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
