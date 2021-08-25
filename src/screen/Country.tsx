import React, {useEffect, useState} from 'react';
import {View,TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {covidApi} from '../api/api';
import {MapCountry} from '../models/caseData.interface';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsPage from './DetailsPage';
import { selectedCountryState } from '../atoms/country';
import { useRecoilState } from 'recoil';
import { StackActions } from '@react-navigation/native';

const HomeStack = createNativeStackNavigator();

function Country({navigation}) {
  return (
    <HomeStack.Navigator  >
      <HomeStack.Screen name="Country" component={CountryElement} />
      <HomeStack.Screen name="Details" component={DetailsPage} />
    </HomeStack.Navigator>
  );
}

function CountryElement({navigation}) {
  const [country, setCountry] = useState<MapCountry>();
  const [selectedCountry, setSelectedCountry ] = useRecoilState(selectedCountryState)

  const handlePressCountry = (country) => {
    setSelectedCountry(country)
  }

  const Item = ({title}) => (
    <TouchableOpacity style={styles.item} onPress={() => handlePressCountry(title)}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    navigation.navigate('Details');
  }, [selectedCountry])

  useEffect(() => {
    var result: Array = [];
    covidApi.getCase().then(allData => {
      for (var i in allData) {
        if (allData[i].All.country) {
          result.push({country: allData[i].All.country});
        }
      }
      setCountry(result);
    });
  }, []);

  // const renderItem = ({item}) => <Item title={item.title} />;

  const renderItem = ({item}) => {
    return <Item title={item.country} navigation={navigation}/>;
  };
  console.log("selectedCountry",selectedCountry)

  return (
    <View>
      <SafeAreaView>
        <FlatList
          style={styles.itemList}
          data={country}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
}

export default Country;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 32,
  },
  itemList: {
    borderRadius: 5,
  },
});
