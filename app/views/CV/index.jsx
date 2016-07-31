import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Description from 'material-ui/svg-icons/action/description';
import LinkIcon from 'material-ui/svg-icons/content/link';
import FlatButton from 'material-ui/FlatButton';
import Facebook from 'images/facebook-logo.svg';
import Linkedin from 'images/linkedin-logo.svg';
import Github from 'images/github-logo.svg';
import LinearProgress from 'material-ui/LinearProgress';
import Chip from 'material-ui/Chip';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {indigo600, indigo900, grey800} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import 'styles/CV';


export default class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false, value: 'a'};
    this.styles = {
      chip: {
        margin: 4
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 670,
        height: 408,
        overflowY: 'auto',
        marginBottom: 0
      },
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
      card: {
        backgroundColor: '#FAFAFA'
      }
    };

    this.tilesData = [
      {
        img: '/app/images/cert1.png',
        title: 'AngularJS',
        author: '916/100',
        href: 'http://www.testprovider.com/ru/Certificate/Search/TP45751316'
      },
      {
        img: '/app/images/cert2.png',
        title: 'HTML/CSS',
        author: '892/1000',
        href: 'http://www.testprovider.com/ru/Certificate/Search/TP41707053'
      },
      {
        img: '/app/images/cert3.png',
        title: 'JavaScript Advanced',
        author: '875/1000',
        href: 'http://www.testprovider.com/ru/Certificate/Search/TP45395707'
      },
      {
        img: '/app/images/cert4.png',
        title: 'JavaScript Essential',
        author: '900/1000',
        href: 'http://www.testprovider.com/ru/Certificate/Search/TP92360944'
      }]
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  scrollTo(id){
    //let  = getElementByID(id);
  }

  componentDidMount() {
    window.scrollTo(100,100);
  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div className="CV">
        <AppBar
        title=""
          zDepth={0}
          iconElementLeft={<div></div>}
          iconElementRight={
          <IconMenu
            iconButtonElement={<div></div>/*
              <FloatingActionButton className='i18nButton' style={{marginRight: '20px'}} mini={true} zDepth={1}>
                <p>RU</p>
              </FloatingActionButton>*/}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
            <MenuItem primaryText="RU" />
          <MenuItem primaryText="EN" />
        <MenuItem primaryText="UA" />
          </IconMenu>
          }

        />
        <span className="background-blue"></span>
        <div className="main-info-paper">
          <Paper style={{backgroundColor: '#f1f1f1'}} className="main-info-paper-inner" zDepth={2}>
            <div className="title-box">
              <Avatar size={80} src="/app/images/Avatar.jpeg" />
              <h1>Vuchkan V.V.</h1>
              <h2> JavaScript and Front-end Developer </h2>
              <Divider />
              <div className="main-info-contact">
                <div className="contact-list">
                  <div><span>Age</span> 18</div>
                  <div><span>Experience</span> 1 year</div>
                  <div><span>Email</span> vuchkan.vladimir@gmail.com</div>
                  <div><span>Phone</span> +38 (066) 0375-901</div>
                </div>
                <div className="download-cv"> <RaisedButton
                  label="Download CV"
                  labelPosition="before"
                  primary={true}
                  icon={<Description />}
                /></div>
              </div>

            </div>
            <div className="social-button-box">
                <FlatButton
                  className="social-button"
                  rippleColor={indigo900}
                  style={{height: 60}}
                  href="https://www.facebook.com/vuchkan.vladimir.9"
                  secondary={true}
                  icon={<div className="social-icon" dangerouslySetInnerHTML={{__html: Facebook}}></div>}
                />
                <FlatButton
                  className="social-button"
                  rippleColor={indigo600}
                  style={{height: 60}}
                  href="https://linkedin.com/in/vladimir-vuchkan-318907119"
                  secondary={true}
                  icon={<div className="social-icon" dangerouslySetInnerHTML={{__html: Linkedin}}></div>}
                />
              <FlatButton
                className="social-button"
                rippleColor={grey800}
                style={{height: 60}}
                href="https://github.com/vvv-js"
                secondary={true}
                icon={<div className="social-icon" dangerouslySetInnerHTML={{__html: Github}}></div>}
              />
            </div>
          </Paper>
        </div>

        <div className="skill-list-wrapper">
          <Paper style={{backgroundColor: '#f1f1f1'}} className="skill-list" zDepth={2}>
           <h1>Skills</h1>
            <div className="skill-progress-bar-list">
              <div className="skill-item">
                <p>React JS <span>90%</span></p>
                <LinearProgress mode="determinate" value={90} />
              </div>
              <div className="skill-item">
                <p>JavaScript <span>95%</span></p>
                <LinearProgress mode="determinate" value={95} />
              </div>
              <div className="skill-item">
                <p>ECMAScript  <span>80%</span></p>
                <LinearProgress mode="determinate" value={80} />
              </div>
              <div className="skill-item">
                <p>WebPack <span>75%</span></p>
                <LinearProgress mode="determinate" value={75} />
              </div>
              <div className="skill-item">
                <p>Asynchronous JavaScript<span>80%</span></p>
                <LinearProgress mode="determinate" value={80} />
              </div>
            </div>
            <div className="skill-image">
              <img src="/app/images/SkillImage.jpg" alt=""/>
            </div>
            <div className="additional-skills" style={this.styles.wrapper}>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>HTML5</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>CSS3</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>Illustrator</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>PhotoShop</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>SASS</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>LESS</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>Bootstrap3</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>GIT</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>Angular2</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>Angular</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>Scrum</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>SQL</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>Linux</Chip>
            </div>
          </Paper>
        </div>
        <div className="experience-wrapper">
          <Paper style={{backgroundColor: '#f1f1f1'}} className="experience-box" zDepth={2}>
            <h1>Experience</h1>
          <Card style={this.styles.card} className="work-card">
              <CardHeader
                title="Intellectus studio &#8212; Junior Front-end developer"
                subtitle="September 2015 - February 2016"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText expandable={true}>
                HTML to PSD. Markup for landing, online stores, blogs.
                DOM-manipulation using JQuery. Development of sliders, and other client components.
                <div className="additional-skills" style={this.styles.wrapper}>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>JavaScript</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>JQuery</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>WordPress</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>HTML5</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>CSS3</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>Illustrator</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>PhotoShop</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>SASS</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>LESS</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>Bootstrap3</Chip>
                </div>
              </CardText>
            </Card>
            <Card style={this.styles.card} className="work-card">
              <CardHeader
                title="Intellectus studio &#8212; Middle Front-end developer"
                subtitle="March 2016 - July 2016"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText expandable={true}>
                Development of hi-load React + Redux application.
                Engineering the application architecture.
                Development REACT-components
                <div className="additional-skills" style={this.styles.wrapper}>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>ReactJS</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>Redux</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>ES6</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>HTML5</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>CSS3</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>SCSS</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>GIT</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>Scrum</Chip>
                  <Chip style={this.styles.chip} onTouchTap={()=>{}}>UI/UX</Chip>
                </div>
              </CardText>
            </Card>
          </Paper>
        </div>
        <div className="education-wrapper">
          <Paper  style={{backgroundColor: '#f1f1f1'}} className="education-list" zDepth={2}>
            <h1>Education</h1>
            <h2>University</h2>
            <div className="university-box">
              <Avatar className="university-logo" style={{backgroundColor: '#ffffff'}} size={80} src="/app/images/kpi-logo.png" />
              <div className="university-info-box">
                <p className="university-name">NTUU 'KPI'</p>
                <Subheader style={{lineHeight: 'auto', paddingLeft: '0'}}>Program engineering, 2014 - present</Subheader>
              </div>
            </div>
            <h2>Certificates</h2>
            <div style={this.styles.root}>
              <GridList
                cellHeight={200}
                style={this.styles.gridList}
              >
                {this.tilesData.map((tile) => (
                  <GridTile
                    key={tile.img}
                    title={<b>{tile.title}</b>}
                    subtitle={<span>{tile.author}</span>}
                    titleBackground={'rgba(0, 188, 212, 0.8)'}
                    actionIcon={<IconButton target="_blank" href={tile.href}><LinkIcon color="white" /></IconButton>}
                  >
                    <img src={tile.img} />
                  </GridTile>
                ))}
              </GridList>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
