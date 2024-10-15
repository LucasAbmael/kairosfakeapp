import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import Constants from "expo-constants";
import { useTheme } from '../../assets/ThemeContext';
import Colors from "../../assets/colors";
import { Section } from "../../components/Section";
import { ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Botao } from '@/src/components/botao';
import { Paragraph } from '@/src/components/Paragraph';
import { Title } from '@/src/components/Title';
import { Info } from '@/src/components/Info';

const statusBarHeight = Constants.statusBarHeight

type TreinoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Treino'>;

type Props = {
  navigation: TreinoScreenNavigationProp;
};


const TreinoScreen: React.FC<Props> = ({ navigation }) => {
  
  const { theme } = useTheme();
  

  return (
    <View style={[Styles.container, theme === 'dark' ? Styles.darkContainer : Styles.lightContainer]}>
        <View style={{ width: "100%", height: 80, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 8, paddingHorizontal: 10 }}>
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                <Ionicons name="chevron-back-outline" size={24} color={Colors.links} onPress={() => navigation.goBack()}/>
                <Title>Seu Treino</Title>
            </View>
            <Paragraph>Terça-feira - Peito, Ombro e Tríceps</Paragraph>
        </View>
      <ScrollView style={{ flex: 1, flexDirection: "column", marginTop: 50, paddingHorizontal: 20, width: "100%"}} showsVerticalScrollIndicator={false}>
        <Section titulo="Tempo Decorrido" displayValue="none" destino="Config" >
          <Text style={[{ fontFamily: "PoppinsBold", fontSize: 60 }, theme === 'dark' ? {color: Colors.darkText} : {color: Colors.lightText}]}>00:00</Text>
          <Botao titulo='Iniciar' />
        </Section>
        <Section titulo="Exercícios" displayValue="none" destino="Config">
          <View>
            <Info>Em Construção</Info>
          </View>
        </Section>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    paddingTop: statusBarHeight + 8
  },
  lightContainer: {
    backgroundColor: Colors.lightBackground
  },
  darkContainer: {
    backgroundColor: Colors.darkBackground
  },
  lightText: {
    color: Colors.lightText,
  },
  darkText: {
    color: Colors.darkText,
  },
  titulo: {
    fontFamily: "Afacad",
    fontWeight: "bold",
    fontSize: 32
  }
});

export default TreinoScreen;
