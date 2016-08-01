import React from 'react';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import Chip from 'material-ui/Chip';

import 'styles/SkillsList';

export default class LinearListProgress extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    skills: [
      {name: 'React JS', value: 90},
      {name: 'JavaScript', value: 95},
      {name: 'ECMAScript', value: 80},
      {name: 'WebPack', value: 75},
      {name: 'Asynchronous JavaScript', value: 80}
    ]
  }
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
      <div className="skill-progress-bar-list">
        {
          this.state.map((skill)=>{
            return(
              <div className="skill-item">
                  <p>{skill.name}
                      <span>{skill.value}%</span>
                  </p>
                  <LinearProgress mode="determinate" value={skill.value}/>
              </div>)
          })
        }
      </div>
    );
  }
}
