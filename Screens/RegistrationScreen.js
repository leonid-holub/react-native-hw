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


export function RegistrationScreen() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [login, setLogin] = useState('');
const [isPassInputActive, setIsPassInputActive] = useState(false);
const [isEmailInputActive, setIsEmailInputActive] = useState(false);
const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
const [isLoginInputActive, setIsLoginInputActive] = useState(false);
const [isKeyboardShown, setIsKeyboardShown] = useState(false);


const onLogin = () => {
console.log("Useremail:" + " " + email);
console.log("Password:" + " " + password);
};

const emailInputActivating = () => {
    setIsEmailInputActive(true);
};

const emailInputDisactivating = () => {
    setIsEmailInputActive(false);
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

const loginInputActivating = () => {
    setIsLoginInputActive(true);
};

const loginInputDisactivating = () => {
    setIsLoginInputActive(false);
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
            <View style={styles.avatarContainer}>
                <View style={styles.avatar}></View>
            </View>
            <Text style={styles.title}>Регистрация</Text>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TextInput style={[styles.inputArea, isLoginInputActive && styles.inputAreaActive]} placeholderTextColor={"#BDBDBD"} onBlur={loginInputDisactivating} onFocus={loginInputActivating} label="login" placeholder="Логин" value={login} onChangeText={setLogin}/>
                <TextInput style={[styles.inputArea, isEmailInputActive && styles.inputAreaActive]} placeholderTextColor={"#BDBDBD"} onBlur={emailInputDisactivating} onFocus={emailInputActivating} label="email" placeholder="Адрес электронной почты" value={email} onChangeText={setEmail}/>
                <TextInput style={[styles.inputArea, isPassInputActive && styles.inputAreaActive]} placeholderTextColor={"#BDBDBD"} onBlur={passInputDisactivating} onFocus={passInputActivating} label="password" placeholder="Пароль" secureTextEntry={isSecureTextEntry} value={password} onChangeText={setPassword}/>
                    <Text style={styles.showButton} onPress={handleToggleShowPass}>Показать</Text>
            </KeyboardAvoidingView>
            <TouchableOpacity accessible={true} accessibilityRole={"button"} accessibilityLabel="Войти!" onPress={onLogin}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Зарегистрироваться</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
        </View>
        )
};


const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingTop: 92,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 111,
        alignSelf: "flex-end",
    },
    containerWithKeyboard: {
        paddingBottom: 0,
        marginBottom: -90,
    },
    avatarContainer: {
        position: "absolute",
        left: 16,
        top: -60,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
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
    top: 147.5,
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