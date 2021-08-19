import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import moment from 'moment';
import {covidApi} from '../utils/api';
function HomeScreen() {
  const d = new Date();
  const [covidCaseData, setCovidCaseData] = useState(null);
  console.log('ok');

  useEffect(() => {
    covidApi.getCase().then(data => {
      setCovidCaseData(data.Global);
    });
  }, []);

  console.log(covidCaseData)

  return (
    <ScrollView
      style={{
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
      }}>
      <Text style={{fontSize:30,paddingBottom:20}}>Covid-19 Report Global</Text>
      <View
        style={{
          backgroundColor: 'black',
          marginBottom: 10,
          borderRadius: 5,
          padding: 5,
        }}>
        <Text style={{fontSize: 20, color: 'white'}}>
          {moment(d).locale('th').format('YYYY MM DD')}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: 'red',
            borderRadius: 10,
            padding: 10,
            flex: 0.47,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}>
          <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
            ผู้ติดเชื้อ
          </Text>
          <Text style={{fontSize:24,paddingVertical:8}}>{covidCaseData.All.confirmed}</Text>
        </View>
        <View
          style={{
            backgroundColor: 'green',
            borderRadius: 10,
            padding: 10,
            flex: 0.47,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}>
          <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
            หายป่วย
          </Text>
          <Text style={{fontSize:24,paddingVertical:8}}>{covidCaseData.All.recovered}</Text>
        </View>
      </View>
      <Text style={{fontSize:20,paddingVertical:10}}>ผุ้เสียชีวิต:</Text>
      <Text style={{fontSize:20}}>จำนวนประชากกรทั้งหมด: </Text>
    </ScrollView>
  );
}

export default HomeScreen;
