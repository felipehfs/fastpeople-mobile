import React, { useState } from 'react';
import { View, Text, 
    AsyncStorage,
    TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import CardGallery from '../../components/cardGallery';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/react-hooks';
import { GET_CATEGORIES } from '../../api/graphql';

export default function Home() {
    const [categoriesVideos, setCategoriesVideos] = useState([]);
    const [name, setName] = useState('');
    const [usersOnline, setUsersOnline] = useState(0);
    const navigation = useNavigation();

    const { loading, error, refetch } = useQuery(GET_CATEGORIES, {
        onCompleted(data) {
            setCategoriesVideos(data.categories);
            setName(data.info.name);
            setUsersOnline(data.usersOnline);
        }
    });

    const categories = [
        {   
            id: 1, 
            name: "Amvs", 
            thumbnail: "https://i1.wp.com/viciados.net/wp-content/uploads/2020/05/Attack-on-Titan-temporada-3-Shingeki-no-Kyojin-temporada-3.jpg?resize=1000%2C600&ssl=1"
        },
        {   id: 2, 
            name: "Dança", 
            thumbnail: "https://static.cnews.fr/sites/default/files/styles/image_640_360/public/mounir-en-action-en-finale-du-bc-one-2013_1.jpg?itok=kA6LY5a4"
        },
        {   id: 3, 
            name: "Esporte",
            thumbnail: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/alguns-esportes-dependem-equipamentos-para-serem-praticados-5734865673029.jpg"
        },
        {   id: 4, 
            name: "Música",
            thumbnail: "https://radios.ebc.com.br/festivaldemusica/sites/_festivaldemusica/files/2019_05_17_festivalmecfm_carrossel_1925x1270_fm.png"
        },
        {   id: 5, 
            name: "Seus envios",
            thumbnail: "https://silvrback.s3.amazonaws.com/uploads/fae5d2c9-6a2c-46cf-b018-3b906c93d8db/upload-jsf-inputFile_large.png"
        },
    ];

    const handleLogout = async () => {
        await AsyncStorage.clear()
        navigation.navigate("login");
    }

    function handleClickGallery(item) {
        
        const categoryWanted = categoriesVideos
            .find(category => category.name === item.name);
        
        if (categoryWanted && categoryWanted.videos.length > 0) {
            const index = Math.floor(Math.random() * categoryWanted.videos.length);
            const url = categoryWanted.videos[index].url;
            
            navigation.navigate("web", {
                url
            });
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Olá, {name}</Text>
                <AntDesign 
                    name="logout" 
                    size={24} 
                    color="#fff"
                    onPress={handleLogout} />
            </View>
            <View style={styles.grid}>
                <TouchableOpacity style={[styles.card, styles.cardDanger]}>
                    <Text style={styles.textCardFriend}>{usersOnline} amigos online</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("profile")}
                    style={[styles.card, styles.cardPrimary]}>
                    <Text style={styles.textCardProfile}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.card]}>
                    <Text style={styles.textCardPeople}>Conheça pessoas novas!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.categories}>
                <View style={styles.categoriesMain}>
                    <FlatList 
                        scrollEnabled
                        data={categories} 
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <CardGallery 
                                onClick={handleClickGallery}
                                data={item} />
                        )} />
                </View>
            </View>
        </View>
    )
}