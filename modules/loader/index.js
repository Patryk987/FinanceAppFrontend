import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { styles } from './style.js';

export default function Loader(props) {

    return (
        <>
            {
                !props.load ? (

                    <ActivityIndicator style={styles.container}
                        size="large"
                        color="#FF4C29" />

                ) : props.children
            }
        </>
    )
}


