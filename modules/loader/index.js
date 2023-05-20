import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ScrollView, RefreshControl, Text, View } from 'react-native';
import { styles } from './style.js';

export default function Loader(props) {

    // State
    const [refreshing, setRefreshing] = React.useState(false);
    const [children, setChildren] = React.useState(props.children);
    const [page, setPage] = React.useState(0);

    // Effect
    useEffect(() => {
        setChildren(props.children);
    }, [props.children]);

    // function 

    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    const onRefresh = () => {
        if (props.onRefresh) {
            setPage(0);
            setRefreshing(true);
            props.onRefresh();
            setRefreshing(false);
        }
    }

    const onPageEnd = () => {
        if (props.onPageEnd) {

            var lPage = page + 1;

            setPage(lPage);
            props.onPageEnd(lPage);
        }
    }

    return (
        <>
            {
                (!props.load || refreshing) ? (
                    <View style={{ minHeight: 100 }}>

                        <ActivityIndicator style={styles.container}
                            size="large"
                            color="#DB1F31" />

                    </View>

                ) : <>
                    <ScrollView
                        style={{ height: '100%', height: '100%' }}
                        refreshControl={
                            props.onRefresh && <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={["#DB1F31"]} />
                        }
                        onScroll={({ nativeEvent }) => {
                            if (isCloseToBottom(nativeEvent)) {
                                onPageEnd();
                            }
                        }}
                        scrollEventThrottle={400}
                    >
                        {children}

                    </ScrollView>
                </>
            }
        </>
    )
}


