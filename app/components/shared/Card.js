import React from 'react';
import {Text,StyleSheet} from "react-native"

export default function Card({children}) {
  return <Text style={styles.text}>{children}</Text>;

}

const styles = StyleSheet.create({

  text:{
borderRadius: 15,
backgroundColor: "aqua",
marginBottom: 20,
overFlow: "hidden",
height: 300,


  },

});
