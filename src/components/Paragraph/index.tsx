import { Text, StyleSheet } from "react-native";
import Colors from "../../assets/colors";
import { useTheme } from '../../assets/ThemeContext';

interface ParagraphProps {
    children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {

    const { theme } = useTheme();

    return (
        <Text style={[Styles.texto, theme === "dark" ? {color: "#9F9F9F"} : {color: "#1B1B1B"}]}>{children}</Text>
    )
}

const Styles = StyleSheet.create({
    texto: {
        fontFamily: "PoppinsLight",
        fontSize: 16
    }
})