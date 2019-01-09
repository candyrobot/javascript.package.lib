import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';

function AppBar_(props) {
  const { style, onClickMenu, text } = props;
  return (
  <AppBar position="static" style={style}>
    <Toolbar style={{ padding: 0 }}>
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon onClick={()=> onClickMenu && onClickMenu()} />
      </IconButton>
      <Typography
        style={{ width: '100%' }}
        variant="inherit" color="inherit"
      >
        {text}
      </Typography>
      <IconButton
        color="inherit"
      >
        <AddIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
  );
}

class Drawer_ extends Component {
  constructor(props) {
    console.log(props.open)
    super(props);
    this.state = {
      open: this.props.open
    };
  }
  render() {
    console.log(this.state.open)
    return (
    <Drawer open={this.props.open}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
    );
  }
}

export default class extends Component {
  state = { open: false };
  render() {
    const { className } = this.props;
    return (
    <div className={ className || 'App' }>
      <AppBar_ onClickMenu={()=> this.setState({ open: true })} />
      <Drawer_ open={this.state.open} />
    </div>
    );
  }
}
