import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import GrainIcon from '@mui/icons-material/Grain';

export const weather_mapping_data={
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