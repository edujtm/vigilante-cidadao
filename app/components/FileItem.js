import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import ProgressBar from 'react-native-progress/Bar';

const FileItem = (props) => {
    const { progress, name } = this.props;
    return (
        <View style={styles.container}>
            <Text>{name}</Text> 
            <ProgressBar progress={progress}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 4,        
        paddingHorizontal: 8,
    }
});

export { FileItem };