import { View } from "react-native";

import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Splash()
{
    return(
        <SafeAreaView>
            <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: 300, height: 300}}>
                    <LottieView
                        source={require("./(tabs)/startup.json")}
                        style={{width: "100%", height: "100%"}}
                        autoPlay
                        loop
                        />
                </View>
            </View>
        </SafeAreaView>
    );
}
