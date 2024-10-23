import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomId} = useParams();

    const myMeeting = async (element) => {
        const appID = 1800132962;
        const serverSecret = "2622069c58e288074f569c4c4a2ffbdc";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Sumedh Sawant");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element, 
            sharedLinks: [{
                name: 'Copy Links',
                url: `http://localhost:3000/room/${roomId}`
            }],
            scenario: { 
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        });
    };

  return (
    <div>
      <div ref={myMeeting}/>
    </div>
  )
}

export default RoomPage
