import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image, Button, Linking } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
// Style
import { main, styles } from './assets/style.js';

// Class
import Api from "./../../class/api.js"

// Icon 
// import { ProductBarIcon, RightIcon } from './assets/icon.js';

// Modules
// import { CardTitle } from './modules/card-title.js';
import { CustomInput } from '../../modules/custom-inputs/index.js'
import { CircleDiagram, BarDiagram } from './../../modules/digrams/index.js';
// Context
import { UserContext } from '../../context.js';

export function ScanCode({ navigation }) {

    const auth = useContext(UserContext);
    const product = new Api("api/products", auth.token);
    const addProductApi = new Api("api/products/addProduct", auth.token);

    const [scanned, setScanned] = useState(false);
    const [productData, setProductData] = useState({});
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [price, setPrice] = useState("");
    const [savedPrice, setSavedPrice] = useState(false);
    const [productName, setProductName] = useState("");
    const [options, setOptions] = useState([]);
    const addPermission = () => {

        requestPermission();

    }

    const save = async (x) => {
        let code = x.data;
        setScanned(true);
        setSavedPrice(false);

        let data = {
            "ean": code
        };

        var productInfo = await product.get(data);

        console.log(productInfo);

        const year = new Date().getFullYear();
        var tab = {
            "01": 0,
            "02": 0,
            "03": 0,
            "04": 0,
            "05": 0,
            "06": 0,
            "07": 0,
            "08": 0,
            "09": 0,
            "10": 0,
            "11": 0,
            "12": 0
        };
        Object.entries(productInfo.productPrice).map((value, index) => {
            console.log(value);
            let operationYear = value[1].year;
            let operationMonth = value[1].month;

            if (operationMonth < 10) operationMonth = "0" + operationMonth;

            if (operationYear == year) {
                tab[operationMonth] += value[1].price;
            }
        });

        setOptions([
            { "value": tab["01"], "color": "#082032", "label": "01" },
            { "value": tab["02"], "color": "#082032", "label": "02" },
            { "value": tab["03"], "color": "#082032", "label": "03" },
            { "value": tab["04"], "color": "#082032", "label": "04" },
            { "value": tab["05"], "color": "#082032", "label": "05" },
            { "value": tab["06"], "color": "#082032", "label": "06" },
            { "value": tab["07"], "color": "#082032", "label": "07" },
            { "value": tab["08"], "color": "#082032", "label": "08" },
            { "value": tab["09"], "color": "#082032", "label": "09" },
            { "value": tab["10"], "color": "#082032", "label": "10" },
            { "value": tab["11"], "color": "#082032", "label": "11" },
            { "value": tab["12"], "color": "#082032", "label": "12" }
        ]);
        setProductData({
            'image': productInfo.imageUrl,
            'name': productInfo.name,
            'code': productInfo.barcode,
            'status': true,
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

    const saveProductPrice = async () => {
        let data = {
            "Barcode": productData.code,
            "price": price
        }

        var saveNewPrice = await product.post(data);

        if (saveNewPrice.status) {
            setSavedPrice(true);
        }
    }

    const addProduct = async () => {
        let data = {
            "Barcode": productData.code,
            "Name": productName
        }

        var results = await addProductApi.post(data);

        if (results.status) {
            setSavedPrice(true);
        }
    }

    if (scanned) {
        return (
            <View style={{ width: '100%', height: '100%', padding: 20, alignItems: 'center' }}>


                {productData && productData.name != null && productData.name != "" ? (
                    <>
                        <View style={{ width: 200, height: 200, backgroundColor: '#082032', borderRadius: 20, borderWidth: 2, borderStyle: 'solid' }}>
                            <Image
                                resizeMode="contain"
                                style={{ width: '100%', height: '100%' }}
                                source={{
                                    uri: productData.image,
                                }}
                            />
                        </View>
                        <View style={{ width: '100%', padding: 20 }} >
                            <Text style={{ width: '100%', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>{productData.name}</Text>
                            <Text style={{ width: '100%', textAlign: 'center' }}>EAN: {productData.code}</Text>
                        </View>
                        <ScrollView>
                            <View style={{ height: 200 }}>
                                <BarDiagram options={options} />
                            </View>
                            {!savedPrice ? (
                                <View style={{ width: '100%', padding: 20 }} >
                                    <CustomInput
                                        keyboardType="numeric"
                                        label='Ile zapłaciłeś?'
                                        onChangeText={(text) => setPrice(text)}
                                        value={price}
                                    />
                                    <TouchableOpacity onPress={() => saveProductPrice()}>
                                        <CustomInput
                                            label={'Zapisz'}
                                            type="button"
                                        />
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <View style={{ width: '100%', padding: 20 }} >
                                    <Text style={{ width: '100%', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Dziękujemy!</Text>
                                </View>
                            )}

                        </ScrollView>
                    </>
                ) : (
                    <View>

                        <View>
                            <Text>Nie znaleziono produktu o numerze: {productData.code}</Text>
                        </View>

                        {!savedPrice ? (
                            <View style={{ width: '100%', padding: 20 }} >

                                <CustomInput
                                    keyboardType="text"
                                    label='Jaki to produkt?'
                                    onChangeText={(text) => setProductName(text)}
                                    value={productName}
                                />
                                <CustomInput
                                    keyboardType="numeric"
                                    label='Ile zapłaciłeś?'
                                    onChangeText={(text) => setPrice(text)}
                                    value={price}
                                />
                                <TouchableOpacity onPress={() => addProduct()}>
                                    <CustomInput
                                        label={'Zapisz'}
                                        type="button"
                                    />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={{ width: '100%', padding: 20 }} >
                                <Text style={{ width: '100%', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Dziękujemy!</Text>
                            </View>
                        )}
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

