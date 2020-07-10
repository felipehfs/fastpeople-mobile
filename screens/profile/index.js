import React, { useState } from 'react';
import { View, Text, 
    AsyncStorage,
    Switch,
    TextInput,
    TouchableOpacity
 } from 'react-native';
    
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useQuery, useMutation } from '@apollo/react-hooks';

import { MY_PROFILE, CREATE_PROFILE } from '../../api/graphql';

export default function Profile() {
    const [online, setOnline] = useState(false);
    const [avatar, setAvatar] = useState('');
    const [id, setId] = useState(null);

    const navigation = useNavigation();

    const { error } = useQuery(MY_PROFILE, {
        onCompleted(data) {
            if (data.profile) {
                setOnline(data.profile.online);
                setAvatar(data.profile.avatar);
                setId(data.profile.id);
            }
        }
    });

    const [saveProfile] = useMutation(CREATE_PROFILE, {});

    const handleLogout = async () => {
        await AsyncStorage.clear()
        navigation.navigate("login");
    }

    const handleSave = () => {
        const values = { variables: {
            online,
            avatar,
        }};
        
        saveProfile(values);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign 
                    name="left" 
                    size={24} 
                    color="#fff"
                    onPress={() => navigation.goBack()} />
                <AntDesign 
                    name="logout" 
                    size={24} 
                    color="#fff"
                    onPress={handleLogout} />
            </View>
           <View style={styles.form}>
               <View>
                   <TextInput 
                        keyboardType="url"
                        style={styles.avatarInput} 
                        value={avatar}
                        placeholderTextColor="#fff"
                        placeholder="Link do avatar" />
               </View>
                <View style={styles.inputGroupOnline}>
                    <Switch 
                        value={online}
                        trackColor={online? "green": "gray"}
                        thumbColor={online? "green": "gray"}
                        onValueChange={() => setOnline(prevState => !prevState)}
                    />
                    <Text style={styles.onlineLabel}>{online? 'Online': 'Offline'}</Text>
                </View>
           </View>
           <View style={styles.footer}>
              <TouchableOpacity 
                onPress={handleSave}
                style={styles.btn}>
                  <Text style={styles.btnText}>Salvar</Text>
              </TouchableOpacity>
           </View>
        </View>
    )
}