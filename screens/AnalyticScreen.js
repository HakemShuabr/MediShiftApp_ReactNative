import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {Header, Left, Icon} from "native-base";
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import IconFontAwesome from "react-native-vector-icons/FontAwesome5";
import { FloatingAction } from "react-native-floating-action";


class AnalyticFloatingAction extends Component {

    render() {
        return(
            <FloatingAction
                ref={(ref) => { this.floatingAction = ref; }}
                actions={actions}
                onPressItem={name => {
                    console.log(`selected button: ${name}`);
                }}
                floatingIcon={<IconFontAwesome name="ellipsis-h" color={"white"} size={24} />}
            />
        )
    }
}
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
                    <AnalyticFloatingAction/>
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
                    <AnalyticFloatingAction/>
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
                    <AnalyticFloatingAction/>
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
        <IconFontAwesome name="chart-bar" color={tintColor} size={24} />
    ),
};

const actions = [
    {
        text: "Diagnosis",
        icon: <IconFontAwesome name="poll" color={"black"} size={20}/>,
        name: "bt_result",
        position: 1
    },
    {
        text: "Reset Inputs",
        icon: <IconFontAwesome name="trash-alt" color={"red"} size={20}/>,
        name: "bt_reset",
        position: 2
    },
];

export default AnalyticScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
