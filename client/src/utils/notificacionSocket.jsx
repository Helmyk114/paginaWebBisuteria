import { useEffect } from 'react';
import io from 'socket.io-client';

const useNotificacionSocketEffect = (eventName, callback) => {
  useEffect(() => {
    const socket = io('http://localhost:4141');
    socket.on(eventName, (data) => {
      if (data.title) {
        callback(data.title, data.message);
      } else {
        callback(null, data.message);
      }
    });

    return () => {
      socket.off(eventName);
    };
  }, [eventName, callback]);
};

export default useNotificacionSocketEffect;