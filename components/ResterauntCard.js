import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const ResterauntCard = ({
	id,
	imgUrl,
	title,
	rating,
	genre,
	address,
	short_description,
	dishes,
	long,
	lat,
}) => {
	return (
		<TouchableOpacity className='bg-white mr-3 shadow'>
			<Image source={{ uri: imgUrl }} className='h-36 w-64 rounded-sm' />
			<View className='px-3 pb-4'>
				<Text className='font-bold text-lg pt-2'>{title}</Text>
				<View className='flex-row items-center space-x-1'>
					<Entypo name='star' size={16} color='green' opacity={0.5} />
					<Text className='text-xs text-gray-500'>
						<Text className='text-green-500'>{rating}</Text> -{' '}
						{genre}
					</Text>
				</View>
				<View className='flex-row items-center space-x-1 mt-1'>
					<EvilIcons
						name='location'
						opacity={0.4}
						size={22}
						color='gray'
					/>
					<Text className='text-xs text-gray-500'>
						Nearby - {address}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default ResterauntCard;

const styles = StyleSheet.create({});
