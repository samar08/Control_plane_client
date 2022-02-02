import React from 'react';
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, CardHeader,ListItem,List,ListItemText} from '@material-ui/core';
import useStyles from '../styles';
import data from '../data/data.json';




const Clustertab = () => {
    const classes=useStyles();
  return(
      <>

     
      <div className='main'>
          <Container className={classes.clusternamecontainer}>
              <Card className={classes.clusternamecard}>
                  <Typography variant="h6" align="center" className={classes.clusternamestring}>Cluster name: {data.clustername}</Typography>
              </Card>

          </Container>
          <Container className={classes.nodescontainer}>
          <Grid container spacing={4} justify="center">
          <Grid key="master"item xs={12} sm={6} md={4}>
              <Card>
                  <CardContent>
                      <Typography align="center" className={classes.clusternamestring}>Master nodes</Typography>
                      <List>
                     { data.master.map((node)=>(
                          <ListItem>
                              <ListItemText primary={node.id} />
                              <ListItemText primary={node.ip} />
                              <ListItemText primary={node.hostname} />
                          </ListItem>
                      ))}
                      </List>
                      </CardContent>
              </Card>
              </Grid>
              <Grid key="worker"item xs={12} sm={6} md={4}>
              <Card>
              <CardContent>
                      <Typography align="center" className={classes.clusternamestring}>Worker nodes</Typography>
                      <List>
                     { data.worker.map((node)=>(
                          <ListItem>
                              <ListItemText primary={node.id} />
                              <ListItemText primary={node.ip} />
                              <ListItemText primary={node.hostname} />
                          </ListItem>
                      ))}
                      </List>
                      </CardContent>
              </Card>
              </Grid>
              </Grid>

          </Container>

      </div>

      </>
  );
};

export default Clustertab;
