import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

import { FileItem } from './FileItem';


const FileUploader = (props) => {

    const [filepath, setFilepath] = useState(null);
    // const [progress, setProgress] = useState(0.0);

    const pickImage = async () =>  {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true
        });
        if (!result.cancelled) {
            setFilepath(result.uri)
        }
    }

    const image = () => {
        if (filepath) {
            return (
                <View >
                    <Image 
                        style={{height: 150}}
                        source={{uri: filepath ? filepath : null}}/>
                </View>
            )
        }
    }

    return (
        <View>
            {image()}
            <View style={styles.buttonPanel}>
                <Button
                    style={styles.fileButton}
                    onPress={pickImage}
                >
                Buscar Imagem
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonPanel: {
        flexDirection: 'row',
    },
    image: {
        flex: 1,
    },
    fileButton: {
        flex: 1,
    }
});

export { FileUploader };