import {Alert} from 'react-native';
const ExitAlert = () => {
  Alert.alert(
    'Confirm exit',
    'Do you want to quit the app?'
    [
      {text: 'CANCEL', style: 'cancel'},
      {text: 'OK', onPress: () => BackHandler.exitApp()}
    ]
  );
};
export default ExitAlert;