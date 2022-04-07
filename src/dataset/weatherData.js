import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import GrainIcon from '@mui/icons-material/Grain';

export const cityLatLon =[
    { name: "서울",lat: 37.532600,lon: 127.024612},
    { name: "안양",lat: 37.391109,lon: 126.967785},
    { name: "부산",lat: 35.166668,lon: 129.066666},
    { name: "울산",lat: 35.549999,lon: 129.316666},
    { name: "광주",lat: 35.835354,lon: 129.263885},
    { name: "대구",lat: 35.866669,lon: 128.600006},
    { name: "대전",lat: 36.351002,lon: 127.385002},
    { name: "파리",lat: 48.864716,lon: 2.349014},
    
]

export const Weather_mapping_data={
    ThunderstormIcon : {
        name: "폭우",
        icon: ThunderstormIcon,
    },
    Rain: {
        name: '비',
        icon: UmbrellaIcon,
    },
    Snow: {
        name: '눈',
        icon: AcUnitIcon,
    },
    Clouds: {
        name: '구름',
        icon: CloudIcon,
    },
    Clear: {
        name: '맑음',
        icon: WbSunnyIcon,
    },
    Mist: {
        name: "안개",
        icon: GrainIcon,

    }
}