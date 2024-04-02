import { useEffect } from 'react';
import io from 'socket.io-client';

const useNotificacionSocketEffect = (eventName, callback) => {
  useEffect(() => {
    const socket = io('http://localhost:4141');
    socket.on(eventName, (data) => {
      callback(data.message);
    });

    return () => {
      socket.off(eventName);
    };
  }, [eventName, callback]);
};

export default useNotificacionSocketEffect;