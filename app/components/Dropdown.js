import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Menu, Button } from 'react-native-paper';

const Dropdown = (props) => {
    const { items, onSelect } = props;

    const [isVisible, setVisible] = useState(false);
    const [label, setLabel] = useState('Selecionar');

    const update = (index) => {
        onSelect(index);
        setLabel(items[index].text);
        hide()
    }

    const open = () => {
        setVisible(true);
    }

    const hide = () => {
        setVisible(false);
    }

    return (
        <Menu
            style={styles.dropdown}
            visible={isVisible}
            onDismiss={hide}
            anchor={
                <Button 
                    mode='outlined'
                    onPress={open}
                >
                    {label}
                </Button>
            }
        >
            {items.map((item, index) => (
                <Menu.Item 
                    key={item.text} 
                    onPress={() => update(index)}
                    title={item.text}
                />
            ))}
        </Menu>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        marginTop: 40,
    }
});

export { Dropdown }