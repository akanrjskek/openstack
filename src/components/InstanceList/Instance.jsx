import React, { Component } from "react";
import Popup from "reactjs-popup";
// nodejs library to set properties for components
// react plugin for creating charts
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx"
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import * as listInfoPopupActions from '../module/listInfoPopup';
import NewWindow from 'react-new-window'

const styles = theme => ({
  actions: {
      float: 'right'
  }
});


export default class Instance extends React.Component{
    state = {
      temp : 0,
      temprating : 0,
      rating : 0,
      tempc : 0,
      tempm : 0,
      tempd : 0,
      thcpu : 0,
      thmemory : 0,
      thdisk : 0,
      toggle : false,
      showPopup : true,
      thrating : false,
      name : 0
    }
    constructor(props){
      super(props);
      this.state = {
        temp : 0,
        rating: 0,
        thcpu : 0,
        thmemory : 0,
        thdisk : 0,
        toggle: false,
        showPopup : true,
        thrating : false,
        name : 0
      };
      this.popUp = this.popUp.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.autothreshold = this.autothreshold.bind(this);
    }

    popUp(){
      this.setState({
        showPopup : !this.state.showPopup
      })
    }
    togglepopup(){
      this.setState({
        thrating : !this.state.thrating
      })
    }

    handleClick = (e) => {
      this.setState({
        rating : this.state.rating
      })
      console.log(this.state.rating)
    }

    autothreshold = () => {
      this.setState({
        rating : 50,
        temp : 50
      })
      console.log(this.state.rating)
    }

    receive = () => {
      this.setState({
        rating : this.state.temprating,
        temp : this.state.temprating
      })
    }

    changeaodh = () => {
      this.setState({
        thcpu : this.state.tempc,
        thmemory : this.state.tempm,
        thdisk : this.state.tempd
      })
    }

    handleChange = (e) => {
      this.setState({
        temprating : e.target.value
      })
    }

    cpuChange = (e) => {
      this.setState({
        tempc : e.target.value
      })
    }

    memoryChange = (e) => {
      this.setState({
        tempm : e.target.value
      })
    }

    diskChange = (e) => {
      this.setState({
        tempd : e.target.value
      })
    }

    tempzero(){
      this.setState({
        temp : 0,
        temprating : 0,
        rating : 0
      })
    }

    render(){
      const classes = this.props.classes;
      const data  = this.props.data;

      const listinfoPopupActions = this.props.listinfoPopupActions;
      return(
        <GridContainer>
          <Card xs={12} style={{flexDirection: 'row', justifyContent: 'flex-end' }}>
            <CardHeader color="primary" stats icon>
              <p className={classes.cardCategory}>{data.name}</p>
            </CardHeader>
            <GridItem xs={12} sm={6} md={3}>
              <Card >  
                <CardHeader color="warning" stats icon>
                  <CardIcon color="warning">
                    <Icon>content_copy</Icon>
                  </CardIcon>
                  <p className={classes.cardCategory}>CPU</p>
                  <h3 className={classes.cardTitle}>
                    {data.cpu}<small>%</small>
                  </h3>
                  <p className={classes.cardCategory}>전체 : 4개</p>
                  <p className={classes.cardCategory}>Threshold : {this.state.thcpu}%</p>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <Danger>
                      <Warning />
                    </Danger>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Get more space
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="success" stats icon>
                  <CardIcon color="success">
                    <Store />
                  </CardIcon>
                  <p className={classes.cardCategory}>Memory</p>
                  <h3 className={classes.cardTitle}>{data.memory}<small>%</small></h3>
                  <p className={classes.cardCategory}>전체 : 8GB</p>
                  <p className={classes.cardCategory}>Threshold : {this.state.thmemory}%</p>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <DateRange />
                    Last 24 Hours
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="danger" stats icon>
                  <CardIcon color="danger">
                    <Icon>info_outline</Icon>
                  </CardIcon>
                  <p className={classes.cardCategory}>Storage</p>
                  <h3 className={classes.cardTitle}>{data.disk}<small>%</small></h3>
                  <p className={classes.cardCategory}>전체 : 512GB</p>
                  <p className={classes.cardCategory}>Threshold : {this.state.thdisk}%</p>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <LocalOffer />
                    Tracked from Github
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <Accessibility />
                  </CardIcon>
                  <p className={classes.cardCategory}>Rating</p>
                  <h3 className={classes.cardTitle}>{this.state.rating}<small>%</small></h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <Update />
                    Just Updated
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            
          <Popup trigger={<button>AOTH Threshold</button>} position = "left bottom" >
              <div>CPU</div>
              <form>
                <input
                  placeholder="rating"
                  value={this.state.tempc}
                  onChange={this.cpuChange.bind(this)}
                  name = "name"
                />
               </form>
              <div>MEMORY</div>
              <form>
                <input
                  placeholder="rating"
                  value={this.state.tempm}
                  onChange={this.memoryChange.bind(this)}
                  name = "name"
                />
               </form>
              <div>DISK</div>
              <form>
                <input
                  placeholder="rating"
                  value={this.state.tempd}
                  onChange={this.diskChange.bind(this)}
                  name = "name"
                />
               </form>
              <button onClick = {this.changeaodh.bind(this)}>완료</button>
          </Popup>
          <Popup trigger={<button>stack Update</button>} position = "left bottom" >
              <div>RATING : 0~100</div>
              <form>
                <input
                  placeholder="rating"
                  value={this.state.temprating}
                  onChange={this.handleChange.bind(this)}
                  name = "name"
                />
               </form>
              <button onClick = {this.receive.bind(this)}>완료</button>
              {this.state.temp > 50 ? alert("rating 위험!") : null}
              {this.state.temp = 0}
              
          </Popup>
          <Popup trigger={<button>Auto Rating</button>} position="left bottom">
              <div>자동 레이팅 조사하시겠습니까?</div>
              <button onClick = {this.autothreshold.bind(this)}>Yes</button>
          </Popup>
            {/*<Button  onClick={this.popUp} >
              Rating Request
            </Button>
            <Button  onClick={this.popUp} >
              Auto Rating
      </Button>*/}
          </Card>
        </GridContainer>
      );
    }
}
