import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Buenos Aires',
  'La Plata',
  'Bahia Blanca',
  'Londres',
  'Tokyo'
]

class App extends Component{

  constructor(){
    super();

    this.state = {city: null}
  }

  render() {
    const { city } = this.state
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h4' color='inherit'>
                Weather App
              </Typography>
            </Toolbar> 
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>

          <LocationListContainer cities={cities}/>
          </Col>

          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className='details'>
                {
                  !city ? 
                    <h1>No city selected</h1>:
                    <ForecastExtended city={city}></ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      
      </Grid>
    );
  }
}



export default App;

