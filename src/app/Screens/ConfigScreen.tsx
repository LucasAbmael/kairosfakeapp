import React from 'react';
import { View, StyleSheet, Button, Image, Text, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import { useTheme } from '../../assets/ThemeContext';
import Constants from 'expo-constants';
import { Section } from '@/src/components/Section';
import Colors from '../../assets/colors';
import { Ionicons } from '@expo/vector-icons';
import { Paragraph } from '@/src/components/Paragraph';
import { Title } from '@/src/components/Title';
import { Info } from '@/src/components/Info';

type ConfigScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Config'>;
const statusBarHeight = Constants.statusBarHeight

type Props = {
  navigation: ConfigScreenNavigationProp;
};

const ConfigScreen: React.FC<Props> = ({ navigation }) => {

    const { theme, toggleTheme } = useTheme();

    return (
        <View style={[Styles.container, theme === 'dark' ? {backgroundColor: Colors.darkBackground} : {backgroundColor: Colors.lightBackground}]}>
            <ScrollView style={{ flex: 1, flexDirection: "column"}} showsVerticalScrollIndicator={false}>
            <View style={{ width: "100%", height: 120, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 8, paddingHorizontal: 10 }}>
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                <Ionicons name="chevron-back-outline" size={24} color={Colors.links} onPress={() => navigation.goBack()}/>
                <Title>Configurações</Title>
            </View>
            <Paragraph>Defina aqui suas preferências e informações pessoais</Paragraph>
        </View>
            <Section titulo='Perfil' displayValue='none' destino='Config'>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 20 }}>
                    <View style={{ width: 80, height: 80, borderRadius: 40 }}>
                        <Image source={{ uri: "https://th.bing.com/th/id/OIP.OSzty6kjvKfBXd_E14ZWLwHaHK?rs=1&pid=ImgDetMain" }} style={{ width: "100%", height: "100%", borderRadius: 40 }} />
                    </View>
                    <View>
                        <Text style={[{fontFamily: "Afacad", fontSize: 32, fontWeight: "bold"}, theme === 'dark' ? {color: Colors.darkText} : {color: Colors.lightText}]}>Nome do usuário</Text>
                        <Paragraph>usuarioboméusuarioinativo@gmail.com</Paragraph>
                    </View>
                </View>
            </Section>
            <Section titulo='Tema do Aplicativo' displayValue='none' destino='Config'>
                <View style={{width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Info>Modo Escuro</Info>
                    <Switch
                        trackColor={{ false: '#767577', true: '#767577' }}
                        thumbColor={theme === 'dark' ? '#60F558' : '#CCC'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleTheme}
                        value={theme === 'dark'}
                    />
                </View>
            </Section>
            <Section titulo="Segurança e Pagamentos" displayValue="none" destino="Config">
                <View style={Styles.option}>
                    <Info>Senha</Info>
                    <TouchableOpacity>
                        <Ionicons name="pencil" size={18} color={theme === "dark" ? Colors.darkText : Colors.lightText}/>
                    </TouchableOpacity>
                </View>
                <View style={Styles.option}>
                    <Info>Cadastrar método de pagamento</Info>
                    <Ionicons name="wallet-outline" size={18} color={theme === "dark" ? Colors.darkText : Colors.lightText}/>
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
        paddingTop: statusBarHeight + 8,
        paddingHorizontal: 10
    },
    option: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export default ConfigScreen;