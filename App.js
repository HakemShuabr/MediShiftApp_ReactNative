import React from 'react';
import {StyleSheet, Text, View, Image,  SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation'
import MainScreen from './screens/MainScreen'
import SettingsScreen from './screens/SettingsScreen'
import AnalyticScreen from './screens/AnalyticScreen'


// const {width} = Dimensions.get('window');
export default class App extends React.Component {
    render() {
        return (
            <AppDrawerNavigator/>
        );
    }
}

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/medishift.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator({
    Screen1 : {
        Home: MainScreen,
        Analytics: AnalyticScreen,
    },
    Screen2 : {
        Settings: SettingsScreen,
    }
}, {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
        activeTintColor: 'orange'
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
