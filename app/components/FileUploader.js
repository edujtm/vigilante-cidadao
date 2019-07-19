import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

import { FileItem } from './FileItem'


const FileUploader = (props) => {

    const [filepath, setFilepath] = useState(null);
    // const [progress, setProgress] = useState(0.0);

    const pickDocument = async () =>  {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            base64: true
        });
        if (!result.cancelled) {
            setFilepath(result.uri)
        }
        console.log(filepath)
    }

    return (
        <View>
            <FileItem name={filepath ? filepath.substring(0, 20) : 'Selecionar'}/>
            <View style={styles.buttonPanel}>
                <Button
                    style={styles.fileButton}
                    onPress={pickDocument}
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
    imageButton: {
        flex: 1,
    },
    fileButton: {
        flex: 1,
    }
});

export { FileUploader };