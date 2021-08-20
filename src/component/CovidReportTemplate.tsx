import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import moment from 'moment';
function CovidReportTemplate({covidCaseData}) {
  const d = new Date();
  const country = covidCaseData?.All.country
    ? covidCaseData?.All.country
    : 'Global';
  return (
    <ScrollView style={styles.container}>
      <Text style={{fontSize: 30, paddingBottom: 20}}>Covid-19 Report {country}</Text>
      <View style={styles.dateWrap}>
        <Text style={{fontSize: 20, color: 'white'}}>
          {moment(d).locale('th').format('YYYY MM DD')}
        </Text>
      </View>
      <View style={styles.wrapCard}>
        <View style={styles.card}>
          <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold'}}>
            ผู้ติดเชื้อ
          </Text>
          <Text style={{fontSize: 24, paddingVertical: 8}}>
            {covidCaseData?.All.confirmed}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontSize: 20, color: 'green', fontWeight: 'bold'}}>
            หายป่วย
          </Text>
          <Text style={{fontSize: 24, paddingVertical: 8}}>
            {covidCaseData?.All.recovered}
          </Text>
        </View>
      </View>
      <Text style={{fontSize: 20, paddingVertical: 10}}>
        ผุ้เสียชีวิต:{covidCaseData?.All.deaths}
      </Text>
      <Text style={{fontSize: 20}}>
        จำนวนประชากกรทั้งหมด:{covidCaseData?.All.population}{' '}
      </Text>
    </ScrollView>
  );
}

export default CovidReportTemplate;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F8F8F8',
  },
  dateWrap: {
    backgroundColor: 'black',
    marginBottom: 10,
    borderRadius: 5,
    padding: 5,
  },
  wrapCard: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    flex: 0.47,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
