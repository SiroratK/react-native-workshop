import React from 'react';
import {View,Text} from 'react-native';

function DetailsPage({route}) {
  const country = route.params.country
  return <View >
    <Text>{country}</Text>
  </View>
}

export default DetailsPage;
