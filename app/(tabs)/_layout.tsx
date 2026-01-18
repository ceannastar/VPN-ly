import Tapbar from "@/components/Tapbar";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs tabBar={props=> <Tapbar {...props}/>} screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false}} >
            <Tabs.Screen
                name="Splash"
                options={{
                }} />
                <Tabs.Screen
                name="Control"
                options={{
                }} />
        </Tabs> 
    );
}