import React from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  const points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 37.33233 + i * 0.001,
        longitude: -122.03121 + i * 0.001
      });
    } else {
      points.push({
        latitude: 37.33233 - i * 0.001,
        longitude: -122.03121 + i * 0.001
      });
    }
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 35.9158119,
        longitude: -78.9474656,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({ map: { height: 300 } });

export default Map;
