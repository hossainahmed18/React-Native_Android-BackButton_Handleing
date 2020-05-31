import * as React from 'react';
import { StyleSheet, Text, View, Alert, BackHandler } from 'react-native';

import { Router, Scene,Stack, Actions } from 'react-native-router-flux';
import One from './component/one';
import Two from './component/two';
import Three from './component/three';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        check: "false"
    };
        
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}
handleBackButtonClick = () => {
if(Actions.currentScene=="one"){
  Alert.alert(
    'Confirm Exit',
    'Do you want to quit the app?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK', 
        onPress: () => BackHandler.exitApp('OK Pressed')
    
       },
    ],
    
  );
}else{
   Actions.pop()
}

return true;
}


  render(){
    return (
      <Router>
         <Stack key="root">
            <Scene key="one" component={One}  initial={true} />
            <Scene key="two" component={Two}  />
            <Scene key="three" component={Three}  />

      
        </Stack>
        </Router>
    
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
