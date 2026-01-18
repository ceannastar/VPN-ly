import Tapbar from "@/components/Tapbar";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs tabBar={props=> <Tapbar {...props}/>} screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false}} >
            <Tabs.Screen name="VPN"/>
            <Tabs.Screen name="Stream"/>
            <Tabs.Screen name="Location" />
            <Tabs.Screen name="Settings"/>
        </Tabs> 
    );
}