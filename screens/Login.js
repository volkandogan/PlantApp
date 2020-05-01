import React, { Component } from "react";
import {
    ActivityIndicator,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const VALID_EMAIL = "contact@react-ui-kit.com";
const VALID_PASSWORD = "subscribe";

export default class Welcome extends React.Component {
    state = {
        email: VALID_EMAIL,
        password: VALID_PASSWORD,
        errors: [],
        loading: false
    };

    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        return (
            <KeyboardAvoidingView style={styles.login} behavior="padding">
                <Block padding={[0, theme.sizes.base * 2]} style={{ backgroundColor: '#ffffff' }}>
                    <Text h1 bold>Login</Text>
                    <Block middle>
                        <Input
                            label="Email"
                            style={[styles.input,]}
                            defaultValue={this.state.email}
                            onChangeText={text => this.setState({ email: text })} />
                        <Input
                            secure
                            label="Password"
                            style={[styles.input,]}
                            defaultValue={this.state.password}
                            onChangeText={text => this.setState({ password: text })} />
                        <Button gradient onPress={() => this.handleLogin()}>
                            {loading ? (
                                <ActivityIndicator size="small" color="white" />
                            ) : (
                                    <Text bold white center>
                                        Login
                                    </Text>
                                )}
                        </Button>
                        <Button onPress={() => navigation.navigate("Forgot")}>
                            <Text
                                gray
                                caption
                                center
                                style={{ textDecorationLine: "underline" }}
                            >
                                Forgot your password?
                             </Text>
                        </Button>
                    </Block>
                </Block>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    login: {
        flex: 1,
        justifyContent: "center"
    },
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    hasErrors: {
        borderBottomColor: theme.colors.accent
    }
});