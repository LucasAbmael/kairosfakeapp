import { Text, StyleSheet } from "react-native";
import Colors from "../../assets/colors";
import { useTheme } from '../../assets/ThemeContext';

interface TitleProps {
    children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {

    const { theme } = useTheme();

    return (
        <Text style={[Styles.texto, theme === "dark" ? {color: Colors.darkText} : {color: Colors.lightText}]}>{children}</Text>
    )
}

const Styles = StyleSheet.create({
    texto: {
        fontFamily: "Afacad",
        fontSize: 32,
        fontWeight: "bold"
    }
})