import {Text, View, StyleSheet, FlatList} from 'react-native'
import users from '../../assets/data/users.json'
import UserListItem from '@/components/UserListItem'
import { useLayoutEffect, useState } from 'react'
import { useNavigation } from 'expo-router';

export default function SearchScreen(){

    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerSearchBaroptions: {
                placeholder: 'search suers',
                onChangeText: setSearch
            }
        })
    },[navigation])
    return (
        <FlatList
        data={users}
        renderItem={({item})=> <UserListItem user={item}/>}
        />
    )
}