import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default Counter => {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>You've pressed the button: {count} time(s)</Text>
            <Button
                title="Press me" onPress={() => { setCount(count + 1) }}
            />
        </View>
    );
}