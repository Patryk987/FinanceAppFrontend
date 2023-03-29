import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image, Button, Linking } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
// Style
import { main, styles } from './assets/style.js';

// Icon 
// import { ProductBarIcon, RightIcon } from './assets/icon.js';

// Modules
// import { CardTitle } from './modules/card-title.js';


export function ScanCode({ navigation }) {

    const [scanned, setScanned] = useState(false);
    const [productData, setProductData] = useState({});
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const addPermission = () => {

        requestPermission();

    }

    const save = (x) => {
        let code = x.data;
        setScanned(true);

        fetch("https://world.openfoodfacts.org/api/v0/product/" + code + ".json")
            .then((response) => response.json())
            .then((data) => {
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

                <TouchableOpacity
                    onPress={() => addPermission()}
                    style={{ width: '80%', alignSelf: 'center', alignItems: 'center', backgroundColor: '#082032', padding: 20, borderRadius: 10 }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Przyznaj dostęp do kamery</Text>
                </TouchableOpacity>
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
                <View style={styles.maskContainer}>
                    <View style={styles.mask}></View>
                    <View style={[styles.mask, { backgroundColor: 'rgba(8, 32, 50, 0)', height: 200 }]}>
                        <View style={styles.maskInner}></View>
                        <View style={styles.maskInner}></View>
                    </View>
                    <View style={styles.mask}></View>
                </View>
            </Camera>
        </View>
    )
}

