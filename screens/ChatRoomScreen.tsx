import React from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';
import InputBox from '../components/InputBox';

const ChatRoomScreen = () => {
	const route = useRoute();
	return (
		<View style={{ flex: 1, backgroundColor: '#E4DCD2' }}>
			<FlatList
				style={{ flex: 1 }}
				data={chatRoomData.messages}
				renderItem={({ item }) => <ChatMessage message={item} />}
				inverted
			/>
			<InputBox />
		</View>
	);
};

export default ChatRoomScreen;
