import React,{useEffect} from 'react';
import {View,Text} from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedCountryState } from '../atoms/country';
import {covidApi} from '../api/api'
import { useState } from 'react';
import CovidReportTemplate from '../component/CovidReportTemplate';

function DetailsPage({}) {
  const country = useRecoilValue(selectedCountryState)
  const [covidCaseData,setCovidCaseData] = useState<object>()
  useEffect(() => {
    covidApi.getCaseByCountry(country).then(data => {
      setCovidCaseData(data)
    });
  }, [country]);
  return <View >
    <CovidReportTemplate covidCaseData={covidCaseData}/>
  </View>
}

export default DetailsPage;
