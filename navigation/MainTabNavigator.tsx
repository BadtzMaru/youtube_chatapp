import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Fontisto } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatsScreen from '../screens/ChatsScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<MainTab.Navigator
			initialRouteName='Camera'
			tabBarOptions={{
				activeTintColor: Colors[colorScheme].background,
				style: {
					backgroundColor: Colors[colorScheme].tint,
				},
				indicatorStyle: {
					backgroundColor: Colors[colorScheme].background,
					height: 3,
				},
				labelStyle: {
					fontWeight: 'bold',
				},
				showIcon: true,
			}}>
			<MainTab.Screen
				name='Camera'
				component={ChatsScreen}
				options={{
					tabBarIcon: ({ color }) => <Fontisto name='camera' color={color} size={18} />,
					tabBarLabel: () => null,
				}}
			/>
			<MainTab.Screen name='Chats' component={ChatsScreen} />
			<MainTab.Screen name='Status' component={TabTwoScreen} />
			<MainTab.Screen name='Calls' component={TabTwoScreen} />
		</MainTab.Navigator>
	);
}
