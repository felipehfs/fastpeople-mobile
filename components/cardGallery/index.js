import React from 'react';
import { ImageBackground, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

function CardGallery(props) {
    return (
        <TouchableOpacity onPress={() => {
            props.onClick(props.data);
        }}>
            <ImageBackground style={styles.card} source={{
                uri: props.data.thumbnail
            }}>
                <Text style={styles.cardTitle}>{props.data.name}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default CardGallery;