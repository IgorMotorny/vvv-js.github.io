import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import 'styles/Experience';

export default class Experience extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    cards: [{
      title: 'Intellectus studio - Junior Front-end developer',
      subtitle: 'September 2015 - February 2016',
      description: '  HTML to PSD. Markup for landing, online stores, blogs. DOM-manipulation using JQuery. Development of sliders, and other client components.',
      skills: ['JavaScript', 'JQuery', 'WordPress', 'HTML5', 'CSS3', 'Illustrator', 'PhotoShop', 'SASS', 'LESS', 'Bootstrap3']
    }, {
      title: 'ArtmartStudio -- Middle Front-end developer',
      subtitle: 'March 2016 - July 2016',
      description: '  Development of hi-load React + Redux application. Engineering the application architecture. Development React-components',
      skills: ['ReactJS', 'Redux', 'ES6', 'REST', 'NPM', 'Lodash', 'HTML5', 'CSS3', 'SCSS', 'GIT', 'Scrum', 'UI/UX']
    }]
  }
  this.styles = {
    card: {
        backgroundColor: '#FAFAFA'
    },
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
      <div className="experience-wrapper  box-wrapper">
          <Paper
              style={{
              backgroundColor: '#f1f1f1'
          }}
              className="box experience-box"
              zDepth={2}>
              <h1>Experience</h1>
              {
                this.state.cards.map((card, idx)=>{
                  return (
                    <Card style={this.styles.card} key={idx} className="work-card">
                        <CardHeader
                            title= {card.title}
                            subtitle= {card.subtitle}
                            actAsExpander={true}
                            showExpandableButton={true}/>
                        <CardText expandable={true}>
                          {card.description}
                            <div className="additional-skills" style={this.styles.wrapper}>
                            {card.skills.map((skill, index)=>{
                              return(<Chip key={index} style={this.styles.chip} onTouchTap={() => {}}>{skill}</Chip>)
                            })}
                          </div>
                        </CardText>
                    </Card>
                  )
                })
              }
          </Paper>
      </div>
    );
  }
}
