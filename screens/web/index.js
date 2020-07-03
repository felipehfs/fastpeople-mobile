import React from 'react';
import { styles } from './styles';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

function WebPage(props) {
    const route = useRoute();

    return <WebView 
        originWhitelist={["*"]}
        source={{ uri: route.params.url }}
        style={styles.container} />
}

export default WebPage;