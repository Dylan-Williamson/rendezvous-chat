import React from 'react';
import './ChatHeader.css';
import { Notifications, EditLocationRounded, PeopleAltRounded, HelpRounded, SearchRounded, SendRounded } from '@material-ui/icons';

const ChatHeader = () => {
    return (
        <div className="chatHeader">
            <h3>header</h3>
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    Test Channel Name
                </h3>
            </div>
            <div className="chatHeader__right">
                <Notifications />
                <EditLocationRounded />
                <PeopleAltRounded />
                <div className="chatHeader__search">
                    <input placeholder="Search" />
                    <SearchRounded />
                </div>
                <SendRounded />
                <HelpRounded />
            </div>
        </div>
    )
}

export default ChatHeader