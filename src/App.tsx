import React from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView, StyleSheet, useColorScheme, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: "#1e252d",
    height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <WebView
        style={{width: '100%', height: '100%', backgroundColor: '#1e252d'}}
        source={{uri: 'https://www.betvictorth.com/'}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
