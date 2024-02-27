import {
    Image,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
  } from "react-native";
import React, { useState } from "react";
import shoe from "../../../assets/shoe.png";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import { UserAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
  
  export default function SignInScreen() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const { height } = useWindowDimensions();
    const { signIn, logOut } = UserAuth();

    const navigation = useNavigation();
  
    const onSingIn = async (e) => {
      e.preventDefault();
      try {
        await signIn(email, password);
        console.log("user signedIn");
        navigation.navigate("ItemList");
      } catch (err) {
        console.log(err);
      }
    };
  
    const OnForgotPassword = () => {
      console.warn("Forgot Password Pressed");
    };

  
    const OnLogOut = async () => {
      try {
        await logOut();
        alert("You are logged out");
        navigation.navigate("SignIn");
      } catch (err) {
        console.log(err);
      }
    };
  
    const OnSingUp = () => {
      console.warn("Sign Up is pressed");
      navigation.navigate("SignUp");
    };
  
    return (
      <View style={styles.main}>
        
        <Image
          source={shoe}
          style={(styles.shoe, { height: height * 0.3 })}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton 
          text="Sign In" 
          onPress={onSingIn} 
        />
        <CustomButton
          bgColor="#8ed1fc"
          text="Forgot Password"
          onPress={OnForgotPassword}
        />
        
        <CustomButton 
          bgColor="#607d8b" 
          text="Log Out" 
          onPress={OnLogOut} />
        <CustomButton
          bgColor="white"
          text="Don't Have an Account? Create One!"
          onPress={OnSingUp}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    main: {
      alignItems: "center",
      backgroundColor: "#F8F993",
      padding: 40,
      width: "90%",
    },
    shoe: { width: "70%", height: 100, maxHeight: 100, maxWidth: 500 },
  });