import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text, Surface, IconButton } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';

const getTextFromAddress = (address) => {
	if (!address.display_name)  {
		return 'Local não identificado';
	}

	return address.display_name.substring(0, 30);
}

const LocationCard = (props) => {
    const { location, navigation, onLocationChanged } = props;
		const [latlng, setLatLong] = useState(null);

		useEffect(() => {
			if (location) {
				setLatLong(location.latlng);
				onLocationChanged(location.address);
			}
		}, [location]);

		const removeLocation = () => {
			if (latlng) {
				setLatLong(null);
				onLocationChanged(null);
			}
		}

    return (
        <Surface style={styles.container}>
            {latlng ? 
                <View style={styles.mapContainer}>
                    <MapView 
                        style={{flex: 1}}
                        scrollEnabled={false}
                        cacheEnabled={Platform.OS === 'android'}
                        region={{ ...latlng, latitudeDelta: 0.009, longitudeDelta: 0.005}}
                        zoomEnabled={false}
                    >
                        <Marker
                            coordinate={latlng}
                            title="Localização da ocorrência"
                        />
                    </MapView>
                </View> : null
            }
            <View style={styles.bottomBar}>
               <Text style={styles.locationText}>
									{latlng ? getTextFromAddress(location.address) : 'Selecione o local da ocorrência'}
							 </Text> 
               <View style={styles.icons}>
                   <IconButton 
                        icon="location-on"
                        size={16}
                        onPress={() => navigation.navigate('map')}
                   />
                    <IconButton 
                        onPress={removeLocation}
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
        flex: 1,
		elevation: 2,
    },
    mapContainer: {
        flex: 1,
        height: 250,
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        height: 25,
    },
    icons: {
        flexDirection: 'row',
        height: 'auto'
    },
    locationText: {
        paddingLeft: 15,
    }
});

export { LocationCard };
