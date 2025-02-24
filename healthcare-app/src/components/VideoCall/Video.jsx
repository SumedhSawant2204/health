import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';

const Video = () => {
    const [value, setValue] = useState();

    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`);
    }, [navigate, value]);

  return ( 
    <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter the room code" />
        <button onClick={handleJoinRoom}>Join</button>
    </div>
  )
}


export default Video