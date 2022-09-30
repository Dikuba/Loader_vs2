import React, {useEffect, useRef} from 'react';
import {SafeAreaView, Text, View, Animated} from 'react-native';
import LottieView from 'lottie-react-native';

const App = () => {
  const progress = useRef(new Animated.Value(0)).current;

  const handleLikeAnimation = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 4500,
      useNativeDriver: true,
    }).start();
    Animated.timing(success, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    handleLikeAnimation();
  }, []);

  return (
    <SafeAreaView>
            <View style={{height: 400, width: 400}}>
        <LottieView
          progress={progress}
          source={require('./assets/loader1.json')}
        />
        <LottieView 
          success={success}
          source={require('./assets/finshed.json')}
        />

      </View>
    </SafeAreaView>
  );};
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffba23',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export defaultApp;