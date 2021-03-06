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

import Chip from 'material-ui/Chip';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {indigo600, indigo900, grey800} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import MainInfo from 'components/MainInfo';
import SkillsList from 'components/SkillsList';
import Experience from 'components/Experience';
import 'styles/CV';
import 'styles/grid';

export default class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
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
                fontWeight: 400
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
            }, {
                img: '/app/images/cert2.png',
                title: 'HTML/CSS',
                author: '892/1000',
                href: 'http://www.testprovider.com/ru/Certificate/Search/TP41707053'
            }, {
                img: '/app/images/cert3.png',
                title: 'JavaScript Advanced',
                author: '875/1000',
                href: 'http://www.testprovider.com/ru/Certificate/Search/TP45395707'
            }, {
                img: '/app/images/cert4.png',
                title: 'JavaScript Essential',
                author: '900/1000',
                href: 'http://www.testprovider.com/ru/Certificate/Search/TP92360944'
            }
        ]
    }

    render() {
        return (
            <div className="CV">
                <AppBar
                    title=""
                    zDepth={0}
                    iconElementLeft={< div > </div>}
                    iconElementRight={< IconMenu iconButtonElement = { < div > </div>/* <FloatingActionButton className='i18nButton' style={{marginRight: '20px'}} mini={true} zDepth={1}> <p>RU</p> </FloatingActionButton>*/
                }
                targetOrigin = {{horizontal: 'right', vertical: 'top'}}anchorOrigin = {{horizontal: 'right', vertical: 'top'}} > <MenuItem primaryText="RU"/> < MenuItem primaryText = "EN" /> <MenuItem primaryText="UA"/> < /IconMenu>}/>
                <span className="background-blue"></span>
                <MainInfo/>
                <SkillsList />
                <Experience />
                <div className="education-wrapper">
                    <Paper
                        style={{
                        backgroundColor: '#f1f1f1'
                    }}
                        className="education-list"
                        zDepth={2}>
                        <h1>Education</h1>
                        <h2>University</h2>
                        <div className="university-box">
                            <Avatar
                                className="university-logo"
                                style={{
                                backgroundColor: '#ffffff'
                            }}
                                size={80}
                                src="/app/images/kpi-logo.png"/>
                            <div className="university-info-box">
                                <p className="university-name">NTUU 'KPI'</p>
                                <Subheader
                                    style={{
                                    lineHeight: 'auto',
                                    paddingLeft: '0'
                                }}>Program engineering, 2014 - present</Subheader>
                            </div>
                        </div>
                        <h2>Certificates</h2>
                        <div style={this.styles.root}>
                            <GridList cellHeight={200} style={this.styles.gridList}>
                                {this.tilesData.map((tile) => (
                                    <GridTile
                                        key={tile.img}
                                        title={< b > {
                                        tile.title
                                    } < /b>}
                                        subtitle={< span > {
                                        tile.author
                                    } < /span>}
                                        titleBackground={'rgba(0, 188, 212, 0.8)'}
                                        actionIcon={< IconButton target = "_blank" href = {
                                        tile.href
                                    } > <LinkIcon color="white"/> < /IconButton>}>
                                        <img src={tile.img}/>
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
