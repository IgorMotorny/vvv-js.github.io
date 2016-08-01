import React from 'react';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import Chip from 'material-ui/Chip';

import 'styles/SkillsList';

export default class SkillsList extends React.Component {

constructor(props) {
  super(props);
  this.styles = {
      chip: {
          margin: 4
      },
      wrapper: {
          display: 'flex',
          flexWrap: 'wrap'
      }
  };
}
  render() {
    return (
      <div className="skill-list-wrapper box-wrapper">
          <Paper
              style={{
              backgroundColor: '#f1f1f1'
          }}
              className="skill-list box"
              zDepth={2}>
              <h1>Skills</h1>
              <div className="skill-progress-bar-list">
                  <div className="skill-item">
                      <p>React JS
                          <span>90%</span>
                      </p>
                      <LinearProgress mode="determinate" value={90}/>
                  </div>
                  <div className="skill-item">
                      <p>JavaScript
                          <span>95%</span>
                      </p>
                      <LinearProgress mode="determinate" value={95}/>
                  </div>
                  <div className="skill-item">
                      <p>ECMAScript
                          <span>80%</span>
                      </p>
                      <LinearProgress mode="determinate" value={80}/>
                  </div>
                  <div className="skill-item">
                      <p>WebPack
                          <span>75%</span>
                      </p>
                      <LinearProgress mode="determinate" value={75}/>
                  </div>
                  <div className="skill-item">
                      <p>Asynchronous JavaScript<span>80%</span>
                      </p>
                      <LinearProgress mode="determinate" value={80}/>
                  </div>
              </div>
              <div className="skill-image">
                  <img src="/app/images/SkillImage.jpg" alt=""/>
              </div>
              <div className="additional-skills" style={this.styles.wrapper}>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>HTML5</Chip>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>CSS3</Chip>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>Illustrator</Chip>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>PhotoShop</Chip>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>SASS</Chip>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>LESS</Chip>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>Bootstrap3</Chip>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>GIT</Chip>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>Angular2</Chip>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>Angular</Chip>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>Scrum</Chip>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>Lodash</Chip>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>NPM</Chip>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>SQL</Chip>
                  <Chip style={this.styles.chip} onTouchTap={() => {}}>Linux</Chip>
              </div>
          </Paper>
      </div>
    );
  }
}
