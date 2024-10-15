import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../../assets/colors";

interface SectionProps {
    children?: React.ReactNode
    titulo: string;
    onPress?: () => void;
}

export const Botao: React.FC<SectionProps> = ({ children, titulo, onPress }) => {
    return (
        <TouchableOpacity style={Styles.botao} onPress={onPress ? onPress : undefined}>
            <Text style={{ fontFamily: "Afacad", fontWeight: "600", fontSize: 28 }} >{titulo}</Text>
            {children && children}
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    botao: {
        width: "100%",
        height: 40,
        backgroundColor: Colors.principal,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8
    }
})