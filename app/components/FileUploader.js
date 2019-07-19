import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import UppyFilePicker from '@uppy/react-native';

import FileList from './FileList';
import { BASE_URL } from '../../environment';

const FileUploader = (props) => {

    const { uppy } = props;

    // const [filepath, setFilepath] = useState(null);
    // const [progress, setProgress] = useState(0.0);
    const [isVisible, setVisible] = useState(false);

    const showFilePicker = () => {
        setVisible(true);
    }

    const hideFilePicker = () => {
        setVisible(false);
    }

    return (
        <View>
            <UppyFilePicker 
                show={showFilePicker}
                onRequestClose={hideFilePicker}
                companionUrl={BASE_URL}
            />
            <FileList 
                uppy={uppy}
                show={isVisible}
                onRequestClose={hideFilePicker}
            />
            <View style={styles.buttonPanel}>
                <Button
                    style={styles.fileButton}
                    onPress={showFilePicker}
                >
                Buscar Arquivo
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