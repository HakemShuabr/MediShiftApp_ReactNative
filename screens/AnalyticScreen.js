import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {Header, Left, Icon} from "native-base";
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import IconFontAwesome from "react-native-vector-icons/FontAwesome";


class DemographicDataInputScreen extends Component{



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
                    <Text>Demographic Data to be input here ...</Text>
                </View>
            </View>
        );
    }

    static navigationOptions = {
        tabBarLabel: 'Demography',
    };
}

class HealthDataInputScreen extends Component{

    static navigationOptions = {
        tabBarLabel: 'Health Data',
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
                    <Text>Health Related Data to be input here ...</Text>
                </View>
            </View>
        );
    }
}

class LifestyleDataInputScreen extends Component{

    static navigationOptions = {
        tabBarLabel: 'Lifestyle Data',
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
                    <Text>Lifestyle Data to be input here ...</Text>
                </View>
            </View>
        );
    }
}

const AnalyticScreen = createMaterialTopTabNavigator({
    DemographicData: DemographicDataInputScreen,
    HealthData: HealthDataInputScreen,
    LifestyleData: LifestyleDataInputScreen,
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        headerMode: 'none',
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        style: {
            backgroundColor: 'white',
        },
    },
});

AnalyticScreen.navigationOptions = {
    tabBarLabel: 'Analysis',
    tabBarIcon: ({tintColor}) => (
        <IconFontAwesome name="bar-chart" color={tintColor} size={24} />
    ),
};

export default AnalyticScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
