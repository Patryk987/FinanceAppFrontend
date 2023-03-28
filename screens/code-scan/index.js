import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image, Button } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
// Style
import { main } from './assets/style.js';

// Icon 
// import { ProductBarIcon, RightIcon } from './assets/icon.js';

// Modules
// import { CardTitle } from './modules/card-title.js';


export function ScanCode({ navigation }) {

    const [scanned, setScanned] = useState(false);
    const [productData, setProductData] = useState({});
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const save = (x) => {
        let code = x.data;
        setScanned(true);

        fetch("https://world.openfoodfacts.org/api/v0/product/" + code + ".json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProductData({
                    'image': data.product.image_front_url,
                    'name': data.product.product_name,
                    'code': code,
                    'status': data.status,
                })
            });
    }

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    if (scanned) {
        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                {productData && productData.status == 1 ? (
                    <View>
                        <Image
                            resizeMode="contain"
                            style={{ width: 300, height: 300 }}
                            source={{
                                uri: productData.image,
                            }}
                        />
                        <Text>{productData.name}</Text>
                    </View>
                ) : (
                    <View>
                        <Text>Nie znaleziono</Text>
                    </View>

                )}

            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                type={type}
                onBarCodeScanned={(x) => save(x)}
            >
                <View style={styles.buttonContainer}>

                </View>
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
