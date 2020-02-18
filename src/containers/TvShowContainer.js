import React from 'react'
import TvShowCard from '../components/TvShowCard'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

const TvShowContainer = props =>{

    return(
        <>
            {props.tvShows.length?
                <CardColumns>
                {props.tvShows && props.tvShows.map(ts => < TvShowCard key={ts.id} {...ts} btText={props.btText} changeDisplay={props.changeDisplay} handleClick={props.handleClick}/>)}
                </CardColumns>
            :
            <img id="loading" src="loading.svg" style={{padding:'200px 475px'}}/>
            }
        </>
    )

}

export default TvShowContainer