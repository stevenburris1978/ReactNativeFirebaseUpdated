import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Items({
  id,
  category,
  price,
  image,
  title,
  description,
  date,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>

        <>
          <View style={styles.mainContainer}>
            <Image style={styles.image} source={image} />
            <Text style={styles.description}>Id:  {id}</Text>
            <Text style={styles.description}>Category: {category}</Text>            
            <Text style={styles.description}>Item: {title}</Text>
            <Text style={styles.description}>Description: {description}</Text>
            <Text style={styles.description}>Price: ${price}</Text>
            <View style={styles.rowContainer}>
                <Text style={styles.description}>{date}</Text>
                <MaterialCommunityIcons name="gesture-swipe-left" size={30} color="hsl(270, 50%, 60%)" />
            </View>
          </View>
        </>

    </Swipeable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "#F7E7F8",
    flexDirection: "column",
    paddingLeft: "5%",
    paddingRight: "5%",
    borderWidth: 1,
    borderColor: 'hsl(270, 50%, 60%)',
    margin: "1%"
  },
  rowContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginLeft: 10,
    padding: 20,
    marginTop: 20

  },

  description: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    color: 'hsl(270, 50%, 60%)',
    backgroundColor: "#F7E7F8",
    marginTop: 10
  },
});