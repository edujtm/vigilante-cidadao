import React, { useState, useEffect, useReducer } from 'react';
import { View, StyleSheet, ActivityIndicator, InteractionManager } from 'react-native';
import { Button } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const actions = {
    UPDATE_LOCATION: 'update_location',
    UPDATE_SCREEN: 'update_screen',
}

const INITIAL_STATE = {
    region: { 
        latitude: -122,
        longitude: 37,
        latitudeDelta: 0.4,
        longitudeDelta: 0.2,
    },
};

const locationReducer = (state, action) => {
    switch (action.type) {
        case actions.UPDATE_LOCATION:
            return { ...state, latlng: action.payload }
        case action.UPDATE_SCREEN:
            return { ...state, region: action.payload }
        default:
            return state;
    }
};

const MapScreen = (props) => {
    const { navigation } = props;
    const [state, dispatch] = useReducer(locationReducer, INITIAL_STATE);
    const [mapLoaded, setMapLoaded] = useState(false);

    const onRegionChangeComplete = (region) => {
        updateRegion(region);
    }

    const updateLocation = (latlng) => {
        dispatch({
            type: actions.UPDATE_LOCATION,
            payload: latlng
        });
    }

    const updateRegion = (region) => {
        dispatch({
            type: actions.UPDATE_SCREEN,
            payload: region,
        })
    }

		const onLocationSelected = () => {
				InteractionManager.runAfterInteractions(() => {
					const { latlng } = state;
					navigation.navigate('form', { latlng });
				});
		}

    useEffect(() => {
        Permissions.askAsync(Permissions.LOCATION)
        .then(({ status }) => {
            if (status !== 'granted') {
                navigation.navigate('form');
            }
            Location.getCurrentPositionAsync({}).then((loc) => {
                const { latitude, longitude } = loc.coords;
                updateRegion({ ...INITIAL_STATE.region, latitude, longitude })
                updateLocation({ latitude, longitude });
                setMapLoaded(true);
            });
        });
    }, []);

    if (!state.latlng || !mapLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator 
                    size="large"
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <MapView 
               initialRegion={{ ...state.latlng, longitudeDelta: 0.2, latitudeDelta: 0.4 }} 
								onLongPress={(e) => {
									const { coordinate } = e.nativeEvent;
									updateLocation(coordinate);
								}}
               style={{ flex: 1 }}
            >
                <Marker 
                    coordinate={state.latlng} 
                    title="localização da ocorrência"
                    draggable
                    onDragEnd={(loc) => {
											const { coordinate } = loc.nativeEvent;
											updateLocation(coordinate); 
										}}
                />
            </MapView>
            <View style={styles.bottom}>
                <Button
                    style={styles.button}
                    mode='contained'
                    icon="location-on"
										onPress={onLocationSelected}
                >
                    SELECIONAR POSIÇÃO
                </Button>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    bottom: {
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 20,
    },
    button: {
        paddingVertical: 4,
        marginHorizontal: 8,
    }
})

export { MapScreen };
