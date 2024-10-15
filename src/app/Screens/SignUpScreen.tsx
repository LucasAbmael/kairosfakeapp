import * as React from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import Colors from "../../assets/colors";
import { Botao } from "../../components/botao";

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

type Props = {
  navigation: SignUpScreenNavigationProp;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUpScreen: React.FC<Props> = ({ navigation, setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);

  // A navegação ocorrerá após o estado ser atualizado, permitindo que "Home" esteja registrado
  setTimeout(() => {
    navigation.navigate('Inicio'); // Ou use 'replace' se preferir
  }, 0);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.container}>
          <Text style={{ fontFamily: "Afacad", fontWeight: "bold", fontSize: 52, color: "#FFF" }}>Criar conta</Text>
          <View style={Styles.userArea}>
            <Text style={Styles.userData}>Nome</Text>
            <TextInput placeholder='Digite seu primeiro Nome...' style={Styles.userInput} placeholderTextColor="#CCC" />
          </View>
          <View style={Styles.userArea}>
            <Text style={Styles.userData}>Email</Text>
            <TextInput placeholder='Digite seu Email...' style={Styles.userInput} placeholderTextColor="#CCC" />
          </View>
          <View style={Styles.userArea}>
            <Text style={Styles.userData}>Senha</Text>
            <TextInput placeholder='Digite sua Senha...' style={Styles.userInput} placeholderTextColor="#CCC" />
          </View>
          <Botao titulo="Registrar" onPress={handleLogin} />

          <View style={{ width: "100%", height: 1, backgroundColor: "#3d3d3d" }}></View>

          <Pressable onPress={handleLogin} style={Styles.botao}>
            <Text style={{ color: "#FFF", fontFamily: "PoppinsMedium", fontSize: 18}}>Log-in com o google</Text>
          </Pressable>
            <Text style={{ color: "#FFF", fontFamily: "PoppinsLight", fontSize: 18 }}>Já possui uma conta? <Text style={{ color: Colors.links, textDecorationLine: "underline" }} onPress={() => navigation.navigate("Login")}>Entre agora!</Text> </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
    backgroundColor: Colors.darkBackground,
    paddingTop: 120,
    paddingLeft: 30,
    paddingRight: 30
  },
  userArea: {
    width: "100%",
    alignItems: "flex-start",
    gap: 4
  },
  userData: {
    color: "#FFF",
    fontFamily: "PoppinsMedium",
    fontSize: 18
  },
  userInput: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    padding: 10,
    color: "#F1F1F1",
    backgroundColor: Colors.darkSection
  },
  botao: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FFF"
  }
})

export default SignUpScreen;