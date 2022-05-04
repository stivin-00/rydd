import React from 'react';
import {View, Dimensions} from 'react-native';

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1}}>
        <HomeMap />
      </View>
      <View style={{bottom: 0}}>
        {/*  Covid Message*/}
        <CovidMessage />

        {/*  Bottom Comp*/}
        <HomeSearch />
      </View>
    </View>
  );
};

export default HomeScreen;
