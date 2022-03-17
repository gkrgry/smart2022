
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function UserCard(props) {
    const { userData, idx } = props; // 아래 두줄과 같음
    // const userData = props.userData; 
    // const idx = props.idx;
    return <div key={idx}>
    <Card sx={{ maxWidth: 345 }}>
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
  </div>
}

export default UserCard;
