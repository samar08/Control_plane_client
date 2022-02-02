import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles((theme)=>({
    Apptypography:{
        margin: '0px 10px',
        color:'#01a982',
    },
    body:{
        marginTop:'1px'
    },
    header:{
        height:'60px',
        backgroundColor:'#FFFFFF',
    },
    headtitle:{
        color:'#FFFFFF',
        fontWeight: 'bold',
       backgroundColor:'#01a982',
    },
    clusterbtn:{
        width:'200px',
        height:'47px',
        color:'#FFFFFF',
        backgroundColor:'#01a982'
    },
    gridcontainer:{
        marginTop:'30px'
    },
    clusternamestring:{
        color:'#FFFFFF',
        backgroundColor:'#01a982'
    },
    clusternamecontainer:{
        width:'400px',
        marginTop:'10px'
    },
    nodescontainer:{
        marginTop:'20px'
    }
}));
export default useStyles;