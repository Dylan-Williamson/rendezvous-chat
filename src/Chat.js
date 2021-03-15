import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons';
import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';

const Chat = () => {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />
            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
            </div>
            <div className="chat__input">
                <AddCircle fontSize="large" />
                <form>
                    <input placeholder={`MESSAGE #TESTCHANNEL`} />
                    <button type="submit" className="chat__inputButton">
                        Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcard fontSize="large" />
                    <Gif fontSize="large" />
                    <EmojiEmotions fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat
