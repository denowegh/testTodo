import React, { useEffect } from 'react';

import { View, SafeAreaView, Text } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { setAuthenticated, setRegistered } from "../redux/actions/AuthActionCreators";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../navigation/AppNavigator';
import RegistrationScreen from '../containers/RegistrationScreen';
import AuthenticationScreen from '../containers/AuthenticationScreen';

const MainScreen = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
      
        dispatch(setAuthenticated(false));

    },[])

    const isAuthenticated = useSelector(state => state.userReducer.isAuthenticated);
    
    const isRegistered = useSelector(state => state.userReducer.isRegistered);
    
    return (
        isAuthenticated
        ?
            <AppNavigator />
        :(
            isRegistered
            ?
            <AuthenticationScreen />
            :
            <RegistrationScreen />
            
        
        )
    );
  
};

export default MainScreen;
