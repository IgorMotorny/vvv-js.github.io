import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {indigo600, indigo900, grey800} from 'material-ui/styles/colors';
import Facebook from 'images/facebook-logo.svg';
import Linkedin from 'images/linkedin-logo.svg';
import Github from 'images/github-logo.svg';

import 'styles/SocialButtons';

export default class SocialButtons extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
        return (
            <div className="social-button-box">
                <FlatButton
                    className="social-button"
                    rippleColor={indigo900}
                    style={{
                      height: 60
                    }}
                    href="https://www.facebook.com/vuchkan.vladimir.9"
                    secondary={true}
                    icon={<div className="social-icon" dangerouslySetInnerHTML={{__html: Facebook}}></div>}/>
                <FlatButton
                    className="social-button"
                    rippleColor={indigo600}
                    style={{
                    height: 60
                }}
                    href="https://linkedin.com/in/vladimir-vuchkan-318907119"
                    secondary={true}
                    icon={<div className="social-icon" dangerouslySetInnerHTML={{__html: Linkedin}}></div>}/>
                <FlatButton
                    className="social-button"
                    rippleColor={grey800}
                    style={{
                    height: 60
                }}
                    href="https://github.com/vvv-js"
                    secondary={true}
                    icon={<div className="social-icon" dangerouslySetInnerHTML={{__html: Github}}></div>}/>
            </div>
        )
    }
}
