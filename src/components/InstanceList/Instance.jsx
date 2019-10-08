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
import Inputrating from '../module/Inputrating';

const styles = theme => ({
  actions: {
      float: 'right'
  }
});


export default class Instance extends React.Component{
    state = {
      rating : 0,
      toggle : false,
      showPopup : true,
      name : 0
    }
    constructor(props){
      super(props);
      this.state = {
        rating: 0,
        toggle: false,
        showPopup : true,
        name : 0
      };
      this.popUp = this.popUp.bind(this);
    }

    popUp(){
      this.setState({
        showPopup : !this.state.showPopup
      })
    }

    handleClick = () => {
      this.setState({
        
      })
      console.log(this.state.name)
    }

    handleChange = (e) => {
      this.setState({
        name : e.target.value
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
            <div>
              <Inputrating/>
              
              <button onClick = {this.handleClick} position = "right center">rating 입력</button>
            </div>
          {this.state.showPopup ? 
          <Popup
                  text = 'Click "Close Button" to hide popup'
                  closePopup 
                  = {this.popUp.bind(this)}
          />
          :null
          }
          <Popup trigger={<button>Auto Rating</button>} position="right center">
              <div>Popup content here !!</div>
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
