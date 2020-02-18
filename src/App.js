import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link}from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import {Layout} from './components/Layout'

import {withRouter} from 'react-router-dom'

import {NavBar} from "./components/NavBar"
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import UserWatchList from "./components/UserWatchList"
import TvShowDisplay from "./components/TvShowDisplay"
 
import SearchContainer from './containers/SearchContainer'

import Home from "./components/Home"
import {BASE_URL} from "./Constants"
import {GET_FETCH} from "./Constants"

class App extends React.Component {
  state={
    featuredTvShows:[],
    load:false,
    loggedIn:false,
    user:{},
    search:'',
    Csearch:'',
    displaytv:{}
  }

  changeDisplay = (poster_path,overview,name,id) =>{
    console.log(poster_path,overview,name)
    this.setState({displaytv:{id,poster_path,overview,name}})
    this.props.history.push('/tvshow')
  }

  handleLogout=()=>{
    localStorage.removeItem('token')
    this.setState({loggedIn:false,user:{}})
  }
  
  loggedIn = (user) =>{
    console.log(user)
    this.setState({loggedIn:true,user})
    this.props.history.push('/')
  }

  componentDidMount(){
    //getting popular shows
    fetch(BASE_URL+'tv_shows_popular')
    .then(res => res.json())
    .then(res=>{
      this.setState({featuredTvShows:res, load:true})
    })
    //autoLogin
    if(localStorage.token){
    fetch(BASE_URL +'auto_login',GET_FETCH)
    .then(res=> res.json())
    .then(res=>{
      this.setState({loggedIn:true,user:res.user})
    })
    }
  }
  handleChange = e =>{
    this.setState({
    [e.target.name]:e.target.value
    })
  }

  handleSubmit = e =>{
    e.preventDefault()
    if(this.state.search){
      this.setState({search:'',Csearch:this.state.search})
      this.props.history.push('/search')
    }
  }
  render(){
    return (
    <div className="App">
      <NavBar search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}user={this.state.user}loggedIn={this.state.loggedIn} handleLogout={this.handleLogout}/>
        <Layout>
        <Switch>
          <Route path="/login"render={(routerProps)=><LogIn {...routerProps} loggedIn={this.loggedIn} />}/>
          <Route path="/signup"render={(routerProps)=><SignUp {...routerProps} loggedIn={this.loggedIn}/>}/>
          <Route path="/search"render={(routerProps)=><SearchContainer {...routerProps} changeDisplay={this.changeDisplay}search={this.state.Csearch}/>}/>
          <Route path={`/@${this.state.user && this.state.user.username}`} render={()=><UserWatchList changeDisplay={this.changeDisplay}{...this.state.user}/>} />
          <Route exact path="/tvshow" render={()=><TvShowDisplay {...this.state.displaytv}/>}/>
          <Route exact path="/" render={()=><Home tvshows={this.state.featuredTvShows} load={this.state.load} />}/>
        </Switch>
        </Layout>
    </div>
  );
  }

}

export default withRouter(App);
