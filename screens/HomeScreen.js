import {
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView className='bg-white pt-5'>
			{/* Header */}
			<View className='flex-row pb-3 items-center mx-4 space-x-2'>
				<Image
					source={{ uri: 'https://links.papareact.com/wru' }}
					className='h-7 w-7 bg-gray-300 p-4 rounded-full'
				/>

				<View className='flex-1'>
					<Text className='font-bold text-gray-400 text-xs'>
						Deliver Now!
					</Text>
					<Text className='font-bold text-xl'>
						Current Location
						<Feather
							name='chevron-down'
							size={24}
							color='#00CCBB'
						/>
					</Text>
				</View>

				<View>
					<Feather name='user' size={30} color='#00CCBB' />
				</View>
				{/* Search */}
			</View>
			<View className='flex-row items-center space-x-2 pb-2 mx-4'>
				<View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
					<Feather name='search' size={20} color='gray' />
					<TextInput
						placeholder='Resteraunts and cuisines'
						keyboardType='default'
					/>
				</View>
				<Ionicons
					name='ios-options-outline'
					size={24}
					color='#00CCBB'
				/>
			</View>
			{/* Main */}
			<ScrollView
				className='bg-gray-100'
				contentContainerStyle={{ paddingBottom: 100 }}>
				{/* Categories */}
				<Categories />
				{/* Featured rows */}
				<FeaturedRow
					id='Testing 1'
					title='Featured'
					description='Paid placements from our partners'
				/>
				<FeaturedRow
					id='Testing 2'
					title='Tasty Discounts'
					description='Paid placements from our partners'
				/>
				<FeaturedRow
					id='Testing 3'
					title='Offers Near You!'
					description='Paid placements from our partners'
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
