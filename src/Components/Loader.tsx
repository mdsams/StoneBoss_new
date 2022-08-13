import {Text, View, ActivityIndicator} from 'react-native';

const Loader = () => {
  //   const spinnerStatus = useSelector(state => state.LoaderStatus.spinnerStatus);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#35B2E6" />
      <Text>Loading.....</Text>
    </View>
  );
};
export default Loader;
