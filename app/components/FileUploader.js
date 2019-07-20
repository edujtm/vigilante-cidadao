import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Surface, Text, IconButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

const FileUploader = (props) => {

    const [filepath, setFilepath] = useState(null);

    const pickImage = async () =>  {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true
        });
        if (!result.cancelled) {
            setFilepath(result.uri)
        }
    }

    return (
        <Surface style={styles.container}>
            {filepath ?
                <View>
                    <Image 
                        style={{height: 175}}
                        source={{uri: filepath ? filepath : null}}/>
                </View> : null
            }
            <View style={styles.bottomBar}>
                <Text style={{ paddingLeft: 15 }}>Selecione alguma imagem ou vídeo</Text> 
                <View style={styles.icons}>
                    <IconButton 
                        icon="image"
                        size={16}
                        onPress={pickImage}
                    />
                    <IconButton 
                        icon="delete"
                        size={16}
                        onPress={() => setFilepath(null)}
                    />
                </View>
            </View>
        </Surface>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
		elevation: 2,
    },
    icons: {
        flexDirection: 'row',
        height: 'auto'
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        height: 25,
    }
});

export { FileUploader };