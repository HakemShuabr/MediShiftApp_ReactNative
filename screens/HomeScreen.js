import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {Header, Left, Icon} from "native-base";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"
import AnalyticScreen from "./AnalyticScreen";
import SuggestionScreen from "./SuggestionScreen"
import HealthTrackingScreen from "./HealthTrackingScreen"
import ReportScreen from "./ReportScreen"
import IconFontAwesome from "react-native-vector-icons/FontAwesome5"


class YourHealthScreen extends Component{

    static navigationOptions = {
        tabBarLabel: 'Your Health',
        tabBarIcon: ({tintColor}) => (
            <IconFontAwesome name="stethoscope" color={tintColor} size={24} />
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
                    <Text>YourHealthScreen</Text>
                </View>
            </View>
        );
    }
}

const HomeScreen = createMaterialBottomTabNavigator({
    YourHealth: YourHealthScreen,
    Analytics: AnalyticScreen,
    Suggestion: SuggestionScreen,
    // HealthTracking: HealthTrackingScreen,
    Report: ReportScreen,
}, {
    swipeEnabled: 'true',
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    barStyle: {backgroundColor: 'white'}
});

HomeScreen.navigationOptions = {
    drawerIcon: ({tintColor}) => (
        <Icon name="home" style={{fontSize:24, color: tintColor}} />
    ),

};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
