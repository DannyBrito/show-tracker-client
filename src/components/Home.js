import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Button from '@material-ui/core/Button';
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {IMG_URL} from '../Constants'
const Styles = styled.div`
div{
  background:black;
}
.carousel-h{
  width: 100%;
  max-width: 400px;
  padding: 30px;
  margin: auto;
}

#loading{
  margin:100px;
}
`
class Home extends React.Component{
  
  render(){
    return (
        <Styles>
          {this.props.load?
            (<Carousel className="carousel-h">
              {this.props.tvshows.map(ts =><Carousel.Item key={ts.id}>
                    <img className="d-block w-100" src={IMG_URL + ts.poster_path} alt="First slide"/>
              </Carousel.Item>)}
            </Carousel>)
            :
            <img id="loading" src="loading.svg" />
          }
        </Styles>
  );
  }
}

export default Home;