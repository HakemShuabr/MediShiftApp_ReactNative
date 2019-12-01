import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {Header, Left, Right, Icon} from "native-base";

class MainScreen extends Component{

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="md-analytics" style={{fontSize:24, color:tintColor}}/>
        )
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

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
