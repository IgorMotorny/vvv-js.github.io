import React from 'react';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import Chip from 'material-ui/Chip';

import 'styles/SkillsList';

export default class ChipSkillList extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    skills: ['REST','HTML5', 'CSS3','Illustrator', 'Photoshop', 'SCSS', 'LESS', 'Bootstrap3', 'GIT', 'Angular2', 'Angular', 'Scrum', 'Lodash', 'NPM','SQL', 'Linux']
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
      <div className="additional-skills" style={this.styles.wrapper}>
        {
          this.state.skills.map((skill, i)=>{
            return(
              <Chip key={i} style={this.styles.chip} onTouchTap={() => {}}>{skill}</Chip>
            )})
        }
      </div>
    );
  }
}
