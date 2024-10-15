import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import Colors from "../../assets/colors";
import { Botao } from "../../components/botao";

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const WelcomeScreen: React.FC<Props> = ({ navigation, setIsLoggedIn }) => {
  return (
    <ImageBackground style={Styles.container} source={require("../../assets/imagens/omi.jpg")} imageStyle={{ top: -40 }}>
      <View style={Styles.area}>
        <View style={Styles.textArea}>
          <Text style={{ color: "#FFF", fontFamily: "PoppinsMedium", fontSize: 24 }}>Boas-vindas à</Text>
          <Text style={{ color: Colors.principal, fontFamily: "Afacad", fontWeight: "800", fontSize: 120, marginTop: -45 }}>kairós</Text>
        </View>
        <View style={Styles.linksArea}>
          <Botao titulo="COMEÇAR" onPress={() => navigation.navigate("SignUp")}>
            <Image source={require("../../assets/imagens/seta.png")} />
          </Botao>
          <Text style={{ fontFamily: "PoppinsLight", fontSize: 18, color: "#FFF" }}>Já possui uma conta? <Text style={{ color: Colors.links, textDecorationLine: "underline" }} onPress={() => navigation.navigate('Login')} >Entre agora!</Text></Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
  },
  area: {
    width: "100%",
    height: 280,
    backgroundColor: Colors.darkBackground,
    borderTopLeftRadius: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30
  },
  textArea: {
    alignItems: "center"
  },
  linksArea: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8
  }
})

export default WelcomeScreen;