import ApolloBoost from 'apollo-boost';
import gql from 'graphql-tag';
import { AsyncStorage } from 'react-native';

import { ENV } from '../environment';

const uri = ENV.dev.apiURL;

export const REGISTER_USER = gql`
    mutation Register($name: String!, $email: String!,  $password: String!) {
        newUser(name: $name, email: $email, password: $password) {
            id 
        }
    }
`;

export const CREATE_PROFILE = gql`
    mutation createProfile($avatar: String!, $online: Boolean){
        newProfile(avatar: $avatar, online: $online) {
            id
            avatar
            online
        }
    }
`;

export const MY_PROFILE = gql`
    query {
        profile:myProfile {
            id
            online
            avatar
        }
    }
`;

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }
`;

export const GET_CATEGORIES = gql`
    query {
        
        categories {
            id
            name
            created_at
            videos {
                id
                name
                url
            }
        }

        info {
            name
        }

        usersOnline
    }
`;


export const client = new ApolloBoost({
    uri,
    request: async (operation) => {
        const token = await AsyncStorage.getItem("token");

        operation.setContext({
            headers: {
                authorization: token? `Bearer ${token}`: ''
            }
        });
        
    }
});