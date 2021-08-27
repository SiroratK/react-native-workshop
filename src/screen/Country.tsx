import React, {useEffect, useState, useMemo} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import {covidApi} from '../api/api';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsPage from './DetailsPage';
import {selectedCountryState} from '../atoms/country';
import {useRecoilState} from 'recoil';
import {useKeyboard} from '../functions';
import {useNavigation} from '@react-navigation/native';
// import {MapCountry} from '../models/caseData.interface';

const CountryStack = createNativeStackNavigator();

function Country({}) {
  return (
    <CountryStack.Navigator>
      <CountryStack.Screen name="Country" component={CountryElement} />
      <CountryStack.Screen name="Details" component={DetailsPage} />
    </CountryStack.Navigator>
  );
}

function CountryElement() {
  const [countryList, setCountryList] = useState<Object[]>();
  const [filterCountry, setFilterCountry] = useState<Object[] | undefined>();
  const [selectedCountry, setSelectedCountry] =
    useRecoilState(selectedCountryState);
  const navigation = useNavigation();

  const [text, onChangeText] = React.useState<String>('');

  const handlePressCountry = (item: String) => {
    // const delay = t => new Promise(resolve => setTimeout(resolve, t));
    setTimeout(() => {
      setSelectedCountry(item);
    }, 0);
    navigation.navigate('Details');
  };

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => <Button title="Feed back" />,
  //   });
  // }, [navigation]);

  interface Title {
    title: string;
  }

  const Item = ({title}: Title) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handlePressCountry(title)}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}: any) => {
    return <Item title={item.country} />;
  };

  // const _renderFlatList = useMemo(() => {}, [countryList]);

  // useEffect(() => {
  //   if (selectedCountry !== '') {
  //     navigation.navigate('Details');
  //   }
  // }, [selectedCountry]);

  const _renderFlatList = useMemo(() => {
    return (
      <FlatList
        style={styles.itemList}
        data={filterCountry}
        renderItem={renderItem}
      />
    );
  }, [filterCountry]);

  useEffect(() => {
    var result: Array<Object> = [];
    covidApi.getCase().then(allData => {
      for (var i in allData) {
        if (allData[i].All.country) {
          result.push({country: allData[i].All.country});
        }
      }
      setCountryList(result);
      setFilterCountry(result);
    });
  }, []);

  useEffect(() => {
    let res: Object[] | undefined = countryList?.filter(ele =>
      ele.country.toLowerCase().includes(text.toLocaleLowerCase()),
    );
    if (res) {
      setFilterCountry(res);
    } else {
      setFilterCountry(countryList);
    }
  }, [text]);

  // const renderItem = ({item}) => <Item title={item.title} />;

  const keyboardHeight = useKeyboard();
  return (
    <>
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            // value={number}
            placeholder="search country"
            keyboardType="default"
          />
          {_renderFlatList}
        </View>
      </View>
      <View style={{height: keyboardHeight > 0 ? keyboardHeight - 8 : 70}} />
    </>
  );
}

export default Country;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
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
