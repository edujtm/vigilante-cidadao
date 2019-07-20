import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import PropTypes from 'prop-types';

const LabeledInput = (props) => {
    const { label, children } = props;
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label.toUpperCase()}</Text>
            </View>
            <View style={styles.child}>
                {children}
            </View>
        </View>
    )
};

LabeledInput.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10
    },
    labelContainer: {
        flexDirection: 'row',
        paddingHorizontal: 8
    },
    label: {
        fontWeight: '400',
    },
    child: {
        paddingHorizontal: 8,
        marginTop: 8,
    }
});

export { LabeledInput };