import React from 'react';
import {useState} from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import UserCard from './UserCard';
import { paginate } from '../Utils'

function userCardList (props) {
 

    const pageCountentCount = 9;
    const [pageNo, setPageNo] = useState(1);
    const [currentUserData, setCurrentUserData] = useState(paginate(props.userDatas, pageCountentCount, pageNo));
    

    const HandleChangePageNo = (event, value) => {
        setPageNo(value);
        setCurrentUserData(paginate(props.userDatas, pageCountentCount, value))
      }
    

    const userCards = currentUserData.map((userData, idx) => {
        return <Grid item xm={2} sm={2} md={4}>
          <UserCard userData={userData} idx={idx} />
          </Grid>
    })

    return [
        <Grid container spacing={{xs:2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
         {userCards}
        </Grid>,
        <Pagination 
        color="primary" 
        count={Math.ceil(props.userDatas.length / pageCountentCount)}
        page={pageNo}
        onChange={HandleChangePageNo}
        />
    ]
}

export default userCardList

