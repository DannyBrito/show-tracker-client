import React from 'react'
import {IMG_URL} from '../Constants'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components';
const Styles = styled.div`
    img{
        width:350px;
    }
`
const TvShowDisplay = props =>{

    return(
        <>{!props.name?
            <Redirect to='/'/>
            :
        <Styles>
            <img src={props.poster_path ? IMG_URL+props.poster_path: 'no-img.png' } />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.overview}
                </Card.Text>
                <Button  onClick={e => props.handleClick(e,props.id)}>{props.btText}</Button>
            </Card.Body>
        </Styles>}
        </>
    )

    // return(
    //     <Styles>
    //         <img src={IMG_URL+props.poster_path}/>
    //         <h3>{props.name}</h3>
    //     </Styles>
    // )

}

export default TvShowDisplay


