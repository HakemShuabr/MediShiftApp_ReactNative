import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {Header, Left, Icon} from "native-base";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

class AnalyticScreen extends Component{

    static navigationOptions = {
        tabBarLabel: 'Analysis',
        tabBarIcon: ({tintColor}) => (
            <IconFontAwesome name="bar-chart" color={tintColor} size={24} />
        ),
    };

    render() {
        return(
            <View style={styles.container}>
                <Header>
                    <Left style={{flex:1}}>
                        <Icon name="menu" onPress={() =>
                            this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Data to be input here ...</Text>
                </View>
            </View>
        );
    }
}

export default AnalyticScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
