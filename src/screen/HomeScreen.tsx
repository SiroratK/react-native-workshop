import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {covidApi} from '../api/api';
import CovidReportTemplate from '../component/CovidReportTemplate';
import {All} from '../models/caseData.interface';
// import Icon from 'react-native-vector-icons/FontAwesome';
function HomeScreen({}) {
  const [covidCaseData, setCovidCaseData] = useState<All>();

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => <Button title="Feed back" />,
  //   });
  // }, [navigation]);

  useEffect(() => {
    covidApi.getCase().then(data => {
      console.log(data);
      setCovidCaseData(data.Global);
    });
  }, []);

  return (
    // <covidReportTemplate/>
    <ScrollView style={styles.container}>
      <CovidReportTemplate covidCaseData={covidCaseData} />
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
