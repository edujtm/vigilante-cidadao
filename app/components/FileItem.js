import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const FileItem = (props) => {
    const { name } = props;
    return (
        <View style={styles.container}>
            <Text>{name}</Text> 
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