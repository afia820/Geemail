import { Checkbox, IconButton } from '@material-ui/core';
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from '@material-ui/icons';
import React from 'react';

import './EmailList.css';
import EmailRows from './EmailRows';
import Sections from './Sections';

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settings_left">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList_settings_right">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList_sections">
        <Sections Icon={Inbox} title="Primary" color="red" selected />
        <Sections Icon={People} title="Social" color="#1A73E8" />
        <Sections Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList_list">
        <EmailRows
          title="Twitch"
          subject="Hey fellow streamers!"
          description="This is a test"
          time="10:00pm"
        />
        <EmailRows
          title="Twitch"
          subject="Hey fellow streamers!"
          description="This is a test"
          time="10:00pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
