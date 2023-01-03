import logo from "./logo.svg";
import "./App.css";

import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import { HeadsetRounded, PhotoCamera } from "@material-ui/icons";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
// import { ClassNames } from '@emotion/react';
import Img from "./hue.jpeg";

import useStyles from "./Styles";

function App() {
  const classes = useStyles();
const CARDS= [1,2,3,4,5,6,7,8,9];
  return (
    <>
      <CssBaseline />

      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" className={classes.container}>
            <Typography
              variant="h2"
              align="center"
              color={"textPrimary"}
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              align="center"
              color={"textSecondary"}
            >
              Hello this is a photo album , consiting of all your past memories.
              Be aware, seeing them may give you FOMO or PTSD.
            </Typography>

            <Grid spacing={2} justifyContent={"center"} container>
              <Grid item>
                <Button size="small" variant="contained" color="primary">
                  SEE MY PHOTOS
                </Button>
              </Grid>
              <Grid item>
                <Button size="small" variant="outlined" color="primary">
                  SECONDARY ACTION
                </Button>
              </Grid>
            </Grid>
          </Container>

          <Container maxWidth={"md"}>
            <Grid container spacing={1} className={classes.check}>

{CARDS.map((elm)=>{
  return <Grid item xs={12} sm={6} md={4}>
                  <Card variant="outlined" className={classes.cardMain}>
                    <CardMedia className={classes.cardMedia} image={Img} />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5">Heading</Typography>
                      <Typography>
                        These are the photos that are being added and i am
                        writing to increase width
                      </Typography>
                    </CardContent>

                    <CardActions className={classes.cardBtn}>
                      <Button size="md" variant="text">
                        View Photo
                      </Button>
                      <Button size="md" variant="text">
                        Edit Photo
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
             
})}

              

              
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
