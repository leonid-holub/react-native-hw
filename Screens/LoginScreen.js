import React, {useState, useEffect} from "react";
import { StyleSheet,
    View,
    TextInput,
    Text,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    Keyboard,
 } from "react-native";


export function LoginScreen() {
const [email, setemail] = useState('');
const [password, setPassword] = useState('');
const [isPassInputActive, setIsPassInputActive] = useState(false);
const [isemailInputActive, setIsemailInputActive] = useState(false);
const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
const [isKeyboardShown, setIsKeyboardShown] = useState(false);


const onLogin = () => {
console.log("Useremail:" + " " + email);
console.log("Password:" + " " + password);
};

const emailInputActivating = () => {
    setIsemailInputActive(true);
};

const emailInputDisactivating = () => {
    setIsemailInputActive(false);
};

const passInputActivating = () => {
    setIsPassInputActive(true);
};

const passInputDisactivating = () => {
    setIsPassInputActive(false);
};

const handleToggleShowPass = () => {
    setIsSecureTextEntry(!isSecureTextEntry);
};

useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        setIsKeyboardShown(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        setIsKeyboardShown(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

return (
        <View style={[styles.container, isKeyboardShown && styles.containerWithKeyboard]}>
            <Text style={styles.title}>Войти</Text>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TextInput style={[styles.inputArea, isemailInputActive && styles.inputAreaActive]} placeholderTextColor={"#BDBDBD"} onBlur={emailInputDisactivating} onFocus={emailInputActivating} label="email" placeholder="Адрес электронной почты" value={email} onChangeText={setemail}/>
                <TextInput style={[styles.inputArea, isPassInputActive && styles.inputAreaActive]} placeholderTextColor={"#BDBDBD"} onBlur={passInputDisactivating} onFocus={passInputActivating} label="password" placeholder="Пароль" secureTextEntry={isSecureTextEntry} value={password} onChangeText={setPassword}/>
                    <Text style={styles.showButton} onPress={handleToggleShowPass}>Показать</Text>
            </KeyboardAvoidingView>
            <TouchableOpacity accessible={true} accessibilityRole={"button"} accessibilityLabel="Войти!" onPress={onLogin}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Войти</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.linkText}>Нет аккаунта? Зарегистрироваться</Text>
        </View>
        )
};


const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 111,
        alignSelf: "flex-end",
    },
    containerWithKeyboard: {
        paddingBottom: 0,
        marginBottom: -90,
    },
    title: {
        fontFmily: 'Roboto',
        fontStyle: "normal",
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        color: "#212121",
        marginBottom: 32,
    },
    inputArea: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 19,
        color: "#212121",
        backgroundColor: "#F6F6F6",
        height: 50,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#E8E8E8",
        borderRadius: 5,
        marginBottom: 16,
        padding: 16,
        paddingRight: 92,
    },
    inputAreaActive: {
        borderColor: "#FF6C00",
    },
    showButton: {
    position: "absolute",
    top: 81.5,
    right: 16,
    color: "#1B4371",
    },
    buttonContainer: {
       borderRadius: 100,
       backgroundColor: "#FF6C00",
       height: 51,
       alignItems: "center",
       justifyContent: "center",
       marginBottom: 16,
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 19,
        color: "#FFFFFF",
    },
    linkText: {
        textAlign: "center",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "inherit",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 19,
        color: "#1B4371",
    },
  });