import React from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import {BASE_URL, GET_FETCH,POST_FETCH} from '../Constants'
import TvShowContainer from './TvShowContainer'

class SerchContainer extends React.Component{
  state={
    tvshows:[]
  }
  componentDidMount(){
   this.fetchData(this.props.search)
  }

  fetchData = (search) =>{
    search = search.replace(/\s/g,'+')
    fetch(BASE_URL+`tv_shows/search/${search}`,GET_FETCH)
    .then(res => res.json())
    .then(res =>{
      this.setState({tvshows:res})
    })
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.search !== this.props.search) {
      this.fetchData(nextProps.search)
    }
  }

  addTvShow = (e,id) =>{
      e.preventDefault()
      fetch(BASE_URL+`tv_shows/save/${id}`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json',
            Authorization: `Bearer ${localStorage.token}`
        }
    })
      .then(res => res.json())
      .then(res =>{
        console.log(res)
        let tvshows = this.state.tvshows.filter(tv => tv.id !== parseInt(res.api))
        this.setState({tvshows})
      })
  }

  render(){
    return (
    <>
      {this.props.search?
      <TvShowContainer btText="track" changeDisplay={this.props.changeDisplay} handleClick={this.addTvShow}tvShows={this.state.tvshows} />
      :
      <Redirect to="/"/>
      }
    </>
    );
  }
}

export default SerchContainer;