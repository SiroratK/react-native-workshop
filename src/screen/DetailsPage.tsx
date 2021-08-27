import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {selectedCountryState} from '../atoms/country';
import {covidApi} from '../api/api';
import {useState} from 'react';
import CovidReportTemplate from '../component/CovidReportTemplate';
import {All} from '../models/caseData.interface';

function DetailsPage({}) {
  const country = useRecoilValue(selectedCountryState);
  const [covidCaseData, setCovidCaseData] = useState<All>();
  useEffect(() => {
    covidApi.getCaseByCountry(country).then(data => {
      setCovidCaseData(data);
    });
  }, [country]);
  return (
    <View>
      <CovidReportTemplate covidCaseData={covidCaseData} />
    </View>
  );
}

export default DetailsPage;
