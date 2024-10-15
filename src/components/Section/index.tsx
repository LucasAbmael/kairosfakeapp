import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import Colors from "../../assets/colors";
import { useTheme } from '../../assets/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

type NavigationProps = StackNavigationProp<RootStackParamList>;

interface SectionProps {
    children: React.ReactNode;
    titulo: string;
    displayValue: "block" | "none";
    destino: keyof RootStackParamList;
}

export const Section: React.FC<SectionProps> = ({ children, titulo, displayValue, destino }) => {

    const navigation = useNavigation<NavigationProps>();

    const { theme } = useTheme();

    return (
        <View style={[Styles.container, theme === 'dark' ? Styles.darkContainer : Styles.lightContainer]}>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                <Text style={[ Styles.titulo, theme === 'dark' ? Styles.darkText : Styles.lightText ]}>{titulo}</Text>
                {displayValue === "block" && (
                    <Ionicons name="chevron-forward-outline" size={24} color={Colors.links} onPress={() => navigation.navigate(destino)}/>
                )}
            </View>
            {children}
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 15,
        borderRadius: 10,
        gap: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    darkContainer: {
        backgroundColor: Colors.darkSection
        
    },
    lightContainer: {
        backgroundColor: Colors.lightSection,
    },
    titulo: {
        fontFamily: "Afacad",
        fontWeight: "bold",
        fontSize: 28
    },
    lightText: {
        color: Colors.lightText
    },
    darkText: {
        color: Colors.darkText
    }
})