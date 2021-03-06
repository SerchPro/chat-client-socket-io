import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { fetchtoken } from '../helpers/fetch';
import { scrollToBottom } from '../helpers/scrollToBottom';
import { types } from '../types/types';

export const SidebarChatItem = ({ user }) => {

  const { chatState, dispatch } = useContext( ChatContext );
  const { activeChat } = chatState;

  const onClick = async() =>{
    dispatch({
      type: types.chatActive,
      payload: user.uid
    });

    const resp = await fetchtoken(`message/${ user.uid }`);
    console.log( resp.last30 );
    dispatch({
      type: types.loadMessages,
      payload: resp.last30
    });

    scrollToBottom('messages')
  }

  return (
    <div 
        className={`chat_list ${ (user.uid === activeChat) && 'active_chat'} `}
        onClick={ onClick}
        >
        <div className="chat_people">
            <div className="chat_img"> 
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="chat_ib">
                <h5> {user.name}</h5>
                {
                  (user.online)
                    ? <span className="text-success">Online</span>
                    : <span className="text-danger">Offline</span>
                }
                
                
            </div>
        </div>
    </div>
  )
}
