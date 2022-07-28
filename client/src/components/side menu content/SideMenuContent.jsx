import DraftsIcon from '@mui/icons-material/Drafts';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React from "react";

var array = ['Inbox', 'Starred', 'Send email', 'Drafts'];

function SideMenuContent(text, index) {
    return(
        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
        </ListItem>
    );
}

function SideMenu(props) {
    return(
        <List>
          {array.map(SideMenuContent, {open: props.open})}
        </List>
    );
}

export default SideMenu;