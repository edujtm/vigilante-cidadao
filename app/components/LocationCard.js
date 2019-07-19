import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text, Surface, IconButton } from 'react-native-paper';
import MapView from 'react-native-maps';

const LocationCard = (props) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        setLocation({ 
            latitude: -30,
            longitude: 45,
        });
    }, []);

    return (
        <Surface style={styles.container}>
            {location ? 
                <View style={styles.mapContainer}>
                    <MapView 
                        scrollEnabled={false}
                        cacheEnabled={Platform.OS === 'android'}
                        region={{ ...location, latitudeDelta: 0.02, longitude: 0.045}}
                    />
                </View> : null
            }
            <View styles={status.bottomBar}>
               <Text>Localização</Text> 
               <View styles={styles.icons}>
                    <IconButton 
                        icon="delete"
                        size={20}
                    />
                    <IconButton 
                        icon="location-on"
                        size={20}
                    />
               </View>
            </View>
        </Surface>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
    },
    mapContainer: {
        flex: 1,
    },
    bottomBar: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    icons: {
        flexDirection: 'row',
    }
});

export { LocationCard };