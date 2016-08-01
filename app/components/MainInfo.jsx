import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Description from 'material-ui/svg-icons/action/description';
import FlatButton from 'material-ui/FlatButton';
import {indigo600, indigo900, grey800} from 'material-ui/styles/colors';
import Facebook from 'images/facebook-logo.svg';
import Linkedin from 'images/linkedin-logo.svg';
import Github from 'images/github-logo.svg';

import 'styles/MainInfo';

export default class MainInfo extends React.Component {

  render() {
    return (
      <div className="main-info-paper box-wrapper">
        <Paper style={{backgroundColor: '#f1f1f1'}} className="main-info-paper-inner box" zDepth={2}>
          <div className="title-box">
            <Avatar size={80} src="/app/images/Avatar.jpeg" />
            <h1>Vuchkan V.V.</h1>
            <h2> JavaScript and Front-end Developer </h2>
            <Divider />
            <div className="main-info-contact">
              <div className="contact-list">
                <div><span>Age</span> 20</div>
                <div><span>Experience</span> 1 year</div>
                <div><span>Email</span> vuchkan.vladimir@gmail.com</div>
                <div><span>Phone</span> +38 (066) 0375-901</div>
              </div>
              <div className="download-cv"> <RaisedButton
                label="Download CV"
                labelPosition="before"
                primary={true}
                href={'/app/images/VuchkanVV.PDF'}
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
    );
  }
}
