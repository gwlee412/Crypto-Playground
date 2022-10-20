import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import MessageInput from './MessageInput';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function ChatFunction() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <Box sx={{width:'100%', backgroundColor:'black', height:'100vh', 
    display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
       <Typography sx={{color:'white', marginBottom:'40px'}}variant="h4" gutterBottom>
        Realtime Chat
      </Typography>
      <Box sx={{backgroundColor:'white',overflow:'auto', width:'36%', height:'500px'}}>
      { socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
      </Box>
    </Box>
  );
}

export default ChatFunction;