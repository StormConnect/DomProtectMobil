import React from 'react'
import { Alert } from 'react-native'
import axios from 'axios'
import { CreateAction } from '../Config/utils/CreateAction'
import { BASE_URL } from '../Config/index'
import AsyncStorage from '@react-native-community/async-storage';



export function useAuth() {

    const [state, dispatch] = React.useReducer((state, action) => {

        switch (action.type) {
            case 'SET_USER':
                return {
                    ...state,
                    loading: false,
                    membre: { ...action.payload },
                };
            case 'REMOVE_USER':
                return {
                    ...state,
                    membre: undefined,
                };

            case 'SET_LOADING':
                return {
                    ...state,
                    loading: action.payload
                };

            case 'INSCRIT':
                return {
                    ...state,
                    membre: { ...action.payload },
                }

            default:
                return state;
        }
    }, {
        membre: undefined,
        loading: true,
    })

    const auth = React.useMemo(() => ({

        login: async (email, password) => {

              /*   const {data} =await axios.post('http://192.168.43.117:5000/tekuv/auth', {
                  password: password,
                  email: email,
                }) */
                const membre={
                    data: 'oui c`\'est domprotect',
                }
            /*    if (data){
                    console.log(data);
                    alert("ok");

                    const membre={
                        data: data,
                    }

                    await AsyncStorage.setItem('membre',JSON.stringify(membre));
                    dispatch(CreateAction('SET_USER', membre));

                } else {
                    console.log(data);
                    alert("false");
                }*/
 
            await AsyncStorage.setItem('membre',JSON.stringify('membre'));
            dispatch(CreateAction('SET_USER', 'membre'));
        },

        register: async (email, password) => {
            console.log('registration', email, password)
        },

        logout: async () => {
            await AsyncStorage.removeItem('membre');
            dispatch(CreateAction('REMOVE_USER'));

        },

    }), [],
    )

    React.useEffect(() => {
        try {

            AsyncStorage.getItem('membre').then(membre => {
                console.log('membre ', membre);

                if (membre) {
                    dispatch(CreateAction('SET_USER', JSON.parse(membre)));
                } else {
                    dispatch(CreateAction('SET_LOADING', false))
                }

            });
        } catch (e) {
            console.log(e, 'error')
        }

    }, []);

    return { auth, state };
}