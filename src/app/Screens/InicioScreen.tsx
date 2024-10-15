import * as React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import Constants from "expo-constants";
import { useTheme } from '../../assets/ThemeContext';
import { Menu } from '../../components/Menu';
import Colors from "../../assets/colors";
import { Section } from "../../components/Section";
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Info } from '@/src/components/Info';

const statusBarHeight = Constants.statusBarHeight

type InicioScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Inicio'>;

type Props = {
  navigation: InicioScreenNavigationProp;
};


const InicioScreen: React.FC<Props> = ({ navigation }) => {
  
  const { theme } = useTheme();
  

  return (
    <View style={[Styles.container, theme === 'dark' ? Styles.darkContainer : Styles.lightContainer]}>
      <ScrollView style={{ flex: 1, flexDirection: "column"}} showsVerticalScrollIndicator={false}>
        <Menu nome="Lucas"/>
        <View style={{ paddingHorizontal: 10 }}>
          <Section titulo="Palavra do dia" displayValue="none" destino="Config" >
            <View style={[{ width: "100%", padding: 24, alignItems: "center", justifyContent: "center", borderRadius: 10}, theme === 'dark' ? {backgroundColor: "#252525"} : {backgroundColor: "#E3E3E3"}]}>
              <Text style={[{ fontFamily: "PoppinsLight", fontSize: 16, paddingLeft: 16, borderLeftWidth: 4, borderColor: "#757575" }, theme === 'dark' ? {color: "#8d8d8d"} : {color: "#424242"}]}>"Por isso digo: Vivam pelo espírito, de modo algum satisfarão o desejo da carne." - <Text>Gálatas 5:16</Text></Text>
            </View>
          </Section>
          <Section titulo="Seu Treino" displayValue="block" destino="Treino" >
            <Info>Terça-feira - Peito, Ombro e Tríceps</Info>
          </Section>
          <Section titulo="Últimas postagens" displayValue="none" destino="Config">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <LinearGradient
              colors={['#F58529', '#F77737', '#FD1D1D', '#C13584']}
              style={Styles.post}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              >
                <Text style={{ fontSize: 24 }}>Post do Instagram</Text>
              </LinearGradient>
              <LinearGradient
              colors={['#F58529', '#F77737', '#FD1D1D', '#C13584']}
              style={Styles.post}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              >
                <Text style={{ fontSize: 24 }}>Post do Instagram</Text>
              </LinearGradient>
              <LinearGradient
              colors={['#F58529', '#F77737', '#FD1D1D', '#C13584']}
              style={Styles.post}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              >
                <Text style={{ fontSize: 24 }}>Post do Instagram</Text>
              </LinearGradient>
              <LinearGradient
              colors={['#F58529', '#F77737', '#FD1D1D', '#C13584']}
              style={Styles.post}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              >
                <Text style={{ fontSize: 24 }}>Post do Instagram</Text>
              </LinearGradient>
              <LinearGradient
              colors={['#F58529', '#F77737', '#FD1D1D', '#C13584']}
              style={Styles.post}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              >
                <Text style={{ fontSize: 24 }}>Post do Instagram</Text>
              </LinearGradient>
            </ScrollView>
            <Text style={{ fontFamily: "PoppinsLight", fontSize: 18, color: Colors.links, textDecorationLine: "underline" }} onPress={() => Linking.openURL("https://www.instagram.com/kairosacademia1/").catch(err => console.error('Erro ao abrir o link: ', err))}>Ver todas as Postagens</Text>
          </Section>
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8
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
  post: {
    width: 200,
    height: 250,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  }
});

export default InicioScreen;
