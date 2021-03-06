import React from 'react'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Icon from '@material-ui/core/Icon';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';




const StudentHome = props=>{

    let classSelect;
    console.log("classes")
    console.log(props.classes)
    if(props.classes.length>0){
        console.log("length>1")
        classSelect=props.classes.map((e,i)=>(
            <Grid item xs={12} md={6} sm={6} key={e.id}>
                <Card>
                    <CardActions onClick={()=>props.selectClass(i)}>
                    <CardContent style={{display:'flex', alignItems:'flex-start', flexDirection:'column'}}>
                        <Typography variant='h5'> <b>{e.fields.class_name}</b> </Typography>
                        <Typography variant='subtitle2'> Click To See Class </Typography>
                    </CardContent>
                    </CardActions>

                </Card>
            </Grid>
        ))
    }
    if(props.classes.length===0){
        classSelect=(
            <Grid item xs={12} md={4} sm={6}>


                <Typography variant='subtitle1' > You Have No Classes!</Typography>

            </Grid>

        )
    }

    return(
        <Grid container spacing={6}>

            <Grid item sm={10} xs={10}>
                <Typography variant="h4">
                    Welcome {props.name}
                </Typography>
            </Grid>
            <Grid item container sm={12} xs={12} spacing={6} style={{display:'flex',justifyContent:'space-between'}}>

                {classSelect}

            </Grid>
            <Grid item container sm={12} xs={12} spacing={6} style={{display:'flex',justifyContent:'space-between'}}>
                
                <Grid item xs={12} md={4} sm={6}>
                    <Card>
                        <CardContent style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                            <Icon component={CheckCircleRoundedIcon} fontSize='large' style={{color:'#39DA8A'}}/>
                            <Typography variant='h5'> <b>4</b> </Typography>
                            <Typography variant='subtitle2'> Completed Assessments </Typography>
                        </CardContent>
                        
                    </Card>

                </Grid>


                <Grid item xs={12} md={4} sm={6}>
                     <Card>
                        <CardContent style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                            <Icon component={ListRoundedIcon} fontSize='large' style={{backgroundColor:'#6C63FF', color:'#fff', borderRadius:20, fontWeight:'lighter'}}/>
                            <Typography variant='h5'> <b>6</b> </Typography>
                            <Typography variant='subtitle2'> Total Assessments </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>


                <Grid item xs={12} md={4} sm={6}>
                    <Card>
                        <CardContent style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                            <Icon component={ErrorRoundedIcon} fontSize='large' style={{color:'#FF5B5C'}}/>
                            <Typography variant='h5'> <b>1</b> </Typography>
                            <Typography variant='subtitle2'> Assessments To-Do</Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item xs={12} md={4} sm={6}>
                    <Card>
                        <CardContent style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                            <Icon component={ClearRoundedIcon} fontSize='large' style={{color:'#FF5B5C'}}/>
                            <Typography variant='h5'> <b>1</b> </Typography>
                            <Typography variant='subtitle2'> Assessments Missed</Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item xs={12} md={4} sm={6}>
                    <Card>
                        <CardContent style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                            <Icon component={VisibilityRoundedIcon} fontSize='large' style={{color:'#6C63FF'}}/>
                            <Typography variant='h5'> <b>4</b> </Typography>
                            <Typography variant='subtitle2'> Assessments Visible</Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>


                <Grid item xs={12} md={4} sm={6}>
                    <Card>
                        <CardContent style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                            <Icon component={TimelineRoundedIcon} fontSize='large' style={{color:'#FDAC41'}}/>
                            <Typography variant='h5'> <b>2.7/5</b> </Typography>
                            <Typography variant='subtitle2'> Overall</Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                


            </Grid>


        </Grid>
    )
}

export default StudentHome