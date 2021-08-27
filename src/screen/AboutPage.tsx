import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import FeedbackModal from '../component/FeedbackModal';
import {useNavigation} from '@react-navigation/native';

function AboutPage() {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Feed back" onPress={() => setShow(true)} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>About Page</Text>
      <FeedbackModal show={show} setShow={setShow} />
    </View>
  );
}

export default AboutPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
