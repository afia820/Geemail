import { Button, IconButton } from '@material-ui/core';
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from '@material-ui/icons';
import React from 'react';

import './Sidebar.css';
import SidebarOptions from './SidebarOptions';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button className="sidebar_compose" startIcon={<Add fontSize="large" />}>
        Compose
      </Button>
      <SidebarOptions Icon={Inbox} title="Inbox" number={90} selected={true} />
      <SidebarOptions Icon={Star} title="Starred" number={20} />
      <SidebarOptions Icon={AccessTime} title="Snoozed" number={39} />
      <SidebarOptions Icon={LabelImportant} title="Important" number={28} />
      <SidebarOptions Icon={NearMe} title="Sent" number={1109} />
      <SidebarOptions Icon={Note} title="Drafts" number={3} />
      <SidebarOptions Icon={ExpandMore} title="More" number={10} />
      <div className="sidebar_footer">
        <div className="sidebar_footer_icons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
