import React from 'react';
import { View, Text, ScrollView, Image } from "react-native";
import DrawerMenuTab from '../components/DrawerMenuTab';
import styles from '../styles/styles';

export default function DrawerItem({ navigation }) {
    return (
        <View>
            
                <View style={styles.drawerTopContainer}>
                    <View>
                        <Image source={require('../Assests/Logo.jpeg')} style={{height:60,width:60 }}/>
                    </View>
                    <View style={{marginLeft:20}}>
                        <Text style={styles.drawerHolla}>Holla</Text>
                        <Text style={styles.drawerName}>Hi, RandomName</Text>
                    </View>
                        
                

                </View>
                <DrawerMenuTab Name="My Profile" icon={'user'} onPress={() => { navigation.navigate("Profile") }} />
                <DrawerMenuTab Name="My Contact" icon={'user-friends'} onPress={() => {navigation.navigate("Contact") }} />
                <DrawerMenuTab Name="Notification" icon={'bell'} onPress={() => {  navigation.navigate("Notification") }} />
                <DrawerMenuTab Name="Help" icon={'question'} onPress={() => { navigation.navigate("Help") }} />
                <DrawerMenuTab Name="Logout" icon={'sign-out-alt'} onPress={() => { navigation.navigate("Logout") }} />
            
        </View>
    )
}