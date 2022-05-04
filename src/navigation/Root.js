import React from 'react';
import {scale} from 'react-native-size-matters';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './Home';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DummyScreen = props => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>{props.name}</Text>
  </View>
);

const RootNavigator = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({navigation}) => ({
          headerShown: true,
          headerTransparent: true,
          headerLeft: props => (
            <View
              style={{
                backgroundColor: 'white',
                padding: scale(12),
                margin: scale(3),
                borderRadius: scale(50),
              }}>
              <FontAwesome
                name={'bars'}
                size={scale(20)}
                color={'black'}
                onPress={navigation.toggleDrawer}
              />
            </View>
          ),
        })}
        // screenOptions={{
        //   headerShown: true,
        //   headerTransparent: true,
        //   headerLeft: props => (
        //     <IconComponent onPress={navigation.toggleDrawer} />
        //   ),
        // }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="rydd"
          component={HomeNavigator}
          options={{headerTitle: ''}}
        />

        <Drawer.Screen name="Your Trips" options={{headerTitle: ''}}>
          {() => <DummyScreen name={'Your Trips'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Help" options={{headerTitle: ''}}>
          {() => <DummyScreen name={'Help'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Wallet" options={{headerTitle: ''}}>
          {() => <DummyScreen name={'Wallet'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Settings">
          {() => <DummyScreen name={'Settings'} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
