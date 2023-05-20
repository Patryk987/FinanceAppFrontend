import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

// Style
import { StyleTemplate } from '../../assets/style.js';
import { input } from './assets/style.js';

// Icons
import { ShowEye, HiddenEye } from './assets/icon.js';

// Modules
import Checkbox from './checkbox.js';
import SelectDropdown from 'react-native-select-dropdown';

export function CustomInput(props) {

    const [type, set_type] = useState(props.type ? props.type : "input");
    const [label, set_label] = useState(props.label ? props.label : "");
    const [value, set_value] = useState(props.value ? props.value : "");
    const [error, set_error] = useState(props.error ? props.error : "");
    const [state, set_state] = useState(props.state ? props.state : "regular");
    const [keyboardType, setKeyboardType] = useState(props.keyboardType ? props.keyboardType : "text");
    const [secure_text_entry, set_secure_text_entry] = useState(props.secureTextEntry ? props.secureTextEntry : false);
    const [check, set_check] = useState(false);
    const [toggle, set_toggle] = useState(false);
    const [border_color, set_border_color] = useState(StyleTemplate.colors.primary);

    useEffect(() => {

        switch (state) {
            case "complete":
                set_border_color(StyleTemplate.colors.primary);
                break;
            case "error":
                set_border_color(StyleTemplate.colors.negative);
                break;
            case "warning":
                set_border_color(StyleTemplate.colors.warning);
                break;
            default:
                set_border_color(StyleTemplate.colors.primary);
                break;
        }

    }, [state])

    useEffect(() => {

        set_state(props.state);
        set_error(props.error);

    }, [props.state])

    useEffect(() => {

        set_state(props.state);
        set_error(props.error);

    }, [props.error])

    const onChange = (text) => {

        set_value(text);
        props.onChangeText(text);

    }

    const Input = (
        <>
            <Text style={input.label}>{label}</Text>

            <View
                style={[input.label_box, { borderBottomColor: border_color }]}
            >

                <TextInput
                    style={input.input}
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    placeholderTextColor={StyleTemplate.colors.primary}
                    keyboardType={keyboardType}
                    secureTextEntry={secure_text_entry}
                />

                {
                    props.secureTextEntry && (
                        <TouchableOpacity
                            onPress={() => set_secure_text_entry(!secure_text_entry)}
                            style={input.svg}
                        >
                            {secure_text_entry ? <ShowEye /> : <HiddenEye />}
                        </TouchableOpacity>
                    )
                }
            </View>
            {state == "error" && (<Text style={input.error}>{error}</Text>)}
        </>
    )

    const Button = (
        <>

            <View style={input.button}>
                <Text style={input.buttonText}>{label}</Text>
            </View>

        </>
    )

    const CheckboxInput = (
        <>
            <TouchableOpacity onPress={() => set_check(!check)}>
                <Checkbox checked={check} label={label} />
            </TouchableOpacity>
        </>
    )

    const SelectInput = (
        <>
            <Text style={input.label}>{label}</Text>
            <View style={input.label_box}>
                <SelectDropdown
                    data={props.data}
                    // defaultValueByIndex={1}
                    defaultValue={props.label}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem);
                        onChange(selectedItem);
                    }}
                    defaultButtonText={props.label}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item;
                    }}
                    buttonStyle={{ width: '100%' }}
                />
            </View>
        </>
    )

    const loadField = () => {
        switch (type) {
            case "input":
                return Input;
                break;
            case "checkbox":
                return CheckboxInput;
                break;
            case "button":
                return Button;
                break;
            case "select":
                return SelectInput;
                break;
            default:
                return Input;
                break;
        }
    }

    return (
        <View style={input.container}>
            {loadField()}
        </View>
    )
}

