import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './onboarding/splash';

import {StoreProvider} from 'easy-peasy';
import {RouteContext} from './helper/route_context';

import AppStore from './helper/store';

import Page from './component/Page';

const App = () => {
  const Stack = createStackNavigator();

  const HomeStack = () => (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name="Page" component={Page} />
    </Stack.Navigator>
  );

  const [currentState, setCurrentState] = React.useState(
    React.useContext(RouteContext).initState,
  );

  return (
    <StoreProvider store={AppStore}>
      <RouteContext.Provider value={{currentState, setCurrentState}}>
        <NavigationContainer>
          {currentState === 'splash' ? (
            <Splash />
          ) : currentState === 'login' ? (
            <HomeStack />
          ) : (
            <HomeStack />
          )}
        </NavigationContainer>
      </RouteContext.Provider>
    </StoreProvider>
  );
};

export default App;
