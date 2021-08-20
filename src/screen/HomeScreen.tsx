import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import moment from 'moment';
import {covidApi} from '../api/api';
import { useRecoilValue } from 'recoil'
import { selectedCountryState } from '../atoms/country';
import CovidReportTemplate from '../component/CovidReportTemplate';
function HomeScreen() {
  const [covidCaseData, setCovidCaseData] = useState<any>(null);

  useEffect(() => {
    covidApi.getCase().then(data => {
      console.log(data);
      setCovidCaseData(data.Global);
    });
  }, []);

  const value = useRecoilValue(selectedCountryState)
  return (
    // <covidReportTemplate/>
    <View>
      <CovidReportTemplate covidCaseData={covidCaseData}/>
    </View>
  );
}

export default HomeScreen;
