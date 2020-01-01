import React from 'react'
import {IMG_URL} from '../Constants'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components';
const Styles = styled.div`
    img{
        width:100px;
    }
`
const TvShowCard = props =>{

    return(
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={IMG_URL+props.poster_path} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {/* <Card.Text>{props.overview}
                </Card.Text> */}
                <Card.Link href="#">Card Link</Card.Link>
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


