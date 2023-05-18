import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";

export const CircleDiagram = (props) => {
    const [circle, setCircle] = useState([]);
    const [options, setOptions] = useState([]);
    const radius = 70;
    const circleCircumference = 2 * Math.PI * radius;


    useEffect(() => {
        if (props.options) {
            setOptions(props.options)
        } else {
            setOptions([
                { "value": 40, "color": "red", "Label": "1" },
                { "value": 25, "color": "green", "Label": "2" },
                { "value": 15, "color": "orange", "Label": "3" },
                { "value": 10, "color": "brown", "Label": "4" },
                { "value": 10, "color": "purple", "Label": "5" },
            ])
        }
    }, [props])

    const countCircle = () => {

        var data = [];
        var total = 0;

        // Ustaw wartości domyślne
        options.forEach((element, index) => {
            data[index] = {
                percentage: 0,
                offset: 0,
                angle: 0,
                color: element.color,
            };
        });

        // Oblicz maksymalną wartość
        options.forEach(element => {
            total += element.value;
        });

        // Oblicz wartości procentowe
        options.forEach((element, index) => {
            data[index].percentage = (element.value / total) * 100;
        });

        // Oblicz wartości offset
        options.forEach((element, index) => {
            if (index == 0) {
                data[index].offset = 0;
            } else {
                data[index].offset = circleCircumference - (circleCircumference * data[index].percentage) / 100
            }
        });

        // Oblicz wartości kąta
        var angle = 0;
        options.forEach((element, index) => {

            data[index].angle += angle;
            angle += (element.value / total) * 360;

        });

        // Wygeneruj svg
        var svg = [];
        options.forEach((element, index) => {

            svg.push(<Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke={element.color}
                fill="transparent"
                strokeWidth="10"
                strokeDasharray={circleCircumference}
                strokeDashoffset={data[index].offset}
                rotation={data[index].angle}
                originX="90"
                originY="90"
            />);

        });

        return svg
    }

    return (
        <View style={styles.container}>
            <View style={styles.graphWrapper}>
                <Svg height="200" width="200" viewBox="0 0 180 180">
                    <G rotation={-90} originX="90" originY="90">
                        {countCircle()}
                    </G>
                </Svg>
                <Text style={styles.label}>{props.billing ? props.billing : "0.00"} zł</Text>
            </View>
        </View>
    );
};

export const BarDiagram = () => {
    const [bar, setBar] = useState([]);
    const radius = 70;
    const circleCircumference = 2 * Math.PI * radius;

    const options = [
        { "value": 40, "color": "#082032", "label": "Rachunki" },
        { "value": 25, "color": "#082032", "label": "Motoryzacja" },
        { "value": 15, "color": "#082032", "label": "Rachunki" },
        { "value": 10, "color": "#082032", "label": "Motoryzacja" },
        { "value": 90, "color": "#082032", "label": "Rachunki" },
    ]

    const countCircle = () => {

        var total = 0;

        options.forEach(element => {
            total += element.value;
        });

        // Wygeneruj svg
        var bar = [];
        options.forEach((element, index) => {

            bar.push(
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{element.value} zł</Text>
                    <View
                        style={{
                            width: 40,
                            height: ((element.value / total) * 100) + "%",
                            backgroundColor: element.color,
                            borderTopRightRadius: 5,
                            borderTopLeftRadius: 5
                        }}
                    />
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{element.label}</Text>
                </View>
            );

        });

        return bar
    }

    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'flex-end',
                    width: '100%',
                    height: '100%'
                }}
            >
                {countCircle()}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    graphWrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        position: "absolute",
        textAlign: "center",
        fontSize: 24,
    },
});