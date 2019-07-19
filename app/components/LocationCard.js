import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text, Surface, IconButton } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';

const LocationCard = (props) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        setLocation({ 
            latitude: -122,
            longitude: 37,
        });
    }, []);

    return (
        <Surface style={styles.container}>
            {location ? 
                <View style={styles.mapContainer}>
                    <MapView 
                        style={{flex: 1}}
                        scrollEnabled={false}
                        cacheEnabled={Platform.OS === 'android'}
                        region={{ ...location, latitudeDelta: 0.02, longitudeDelta: 0.045}}
                        zoomEnabled={false}
                    >
                        <Marker
                            coordinate={location}
                            title="Localização da ocorrência"
                        />
                    </MapView>
                </View> : null
            }
            <View style={styles.bottomBar}>
               <Text>Selecione a local do ocorrido</Text> 
               <View style={styles.icons}>
                   <IconButton 
                       icon="location-on"
                       size={16}
                   />
                    <IconButton 
                        icon="delete"
                        size={16}
                    />
               </View>
            </View>
        </Surface>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        flex: 1
    },
    mapContainer: {
        flex: 1,
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 35,
        height: 25,
    },
    icons: {
        flexDirection: 'row',
        height: 'auto'
    }
});

export { LocationCard };