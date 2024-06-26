import {FC, useEffect} from 'react';
import {View, Text} from 'react-native';
import socket from './socket';

const ChatPage: FC = () => {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('I connected');
    });
  }, []);

  return (
    <View>
      <Text>Hello there</Text>
    </View>
  );
};

export default ChatPage;
