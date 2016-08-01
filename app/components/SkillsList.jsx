import React from 'react';
import Paper from 'material-ui/Paper';

import LinearProgress from 'material-ui/LinearProgress';
import ChipSkillList from 'components/ChipSkillList';
import LinearSkillList from 'components/LinearSkillList';

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
              <LinearSkillList />
              <div className="skill-image">
                  <img src="/app/images/SkillImage.jpg" alt=""/>
              </div>
              <ChipSkillList />
          </Paper>
      </div>
    );
  }
}
