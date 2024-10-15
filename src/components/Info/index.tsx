import { Text, StyleSheet } from "react-native";
import Colors from "../../assets/colors";
import { useTheme } from '../../assets/ThemeContext';

interface InfoProps {
    children: React.ReactNode;
}

export const Info: React.FC<InfoProps> = ({ children }) => {

    const { theme } = useTheme();

    return (
        <Text style={[Styles.texto, theme === "dark" ? {color: Colors.darkText} : {color: Colors.lightText}]}>{children}</Text>
    )
}

const Styles = StyleSheet.create({
    texto: {
        fontFamily: "PoppinsMedium",
        fontSize: 18
    }
})