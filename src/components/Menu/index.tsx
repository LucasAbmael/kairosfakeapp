import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import Constants from "expo-constants";
import Colors from "../../assets/colors";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../assets/ThemeContext';
import { useNavigation } from '@react-navigation/native';

const statusBarHeight = Constants.statusBarHeight;

type NavigationProps = StackNavigationProp<RootStackParamList, 'Config'>;

interface HomeProps{
    nome: string
}

export const Menu: React.FC<HomeProps> = ({ nome }) => {

    const navigation = useNavigation<NavigationProps>();

    const { theme } = useTheme();

    return (
        <View style={Styles.container}>
            <View style={Styles.perfil}>
                <Text style={[{ fontFamily: "Afacad", fontWeight: "bold", fontSize: 38 }, theme === 'dark' ? {color: "#00050A"} : {color: "#fff"}]}>Olá, {nome}</Text>
                <View style={[Styles.fotoPerfil, theme === 'dark' ? {borderColor: "#000"} : {borderColor: "#FFF"}]}>
                    <Image source={{ uri: "https://th.bing.com/th/id/OIP.OSzty6kjvKfBXd_E14ZWLwHaHK?rs=1&pid=ImgDetMain" }} style={{ width: "100%", height: "100%", borderRadius: 60 }} />
                </View>
            </View>
            <View style={Styles.menuLinks}>
                <TouchableOpacity>
                    <Ionicons name="card" size={32} style={theme === 'dark' ? {color: "#00050A"} : {color: "#FFF"}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="settings" size={32} style={theme === 'dark' ? {color: "#00050A"} : {color: "#FFF"}} onPress={() => navigation.navigate('Config')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 160,
        backgroundColor: Colors.principal,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingBottom: 12,
        paddingTop: statusBarHeight + 18,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 70
    },
    perfil: {
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 8,
    },
    fotoPerfil: {
        width:  120,
        height:  120,
        borderRadius: 60,
        borderWidth: 8
    },
    menuLinks: {
        height: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 28
    }
})