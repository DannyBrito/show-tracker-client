import React from 'react'
import {IMG_URL} from '../Constants'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';
const Styles = styled.div`
    img{
        width:100px;
    }
    .button{
        margin-left:20px;
    }
`
const TvShowCard = props =>{
    return(
        <Card style={{ width: '16rem' }} >
            <Card.Img variant="top" src={props.poster_path ? IMG_URL+props.poster_path: 'no-img.png' } />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {/* <Card.Text>{props.overview}
                </Card.Text> */}
                <Button onClick={e => props.handleClick(e,props.id)}>{props.btText}</Button>
                {props.changeDisplay && <Button  onClick={()=>props.changeDisplay(props.poster_path, props.overview, props.name)}> View</Button>}
            </Card.Body>
        </Card>
    )

    // return(
    //     <Styles>
    //         <img src={IMG_URL+props.poster_path}/>
    //         <h3>{props.name}</h3>
    //     </Styles>
    // )

}

export default TvShowCard


