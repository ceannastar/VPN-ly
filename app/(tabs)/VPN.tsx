import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import LottieView from "lottie-react-native";
import { SvgXml } from "react-native-svg";

export default function VPN()
{
    const history = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V12L15 15" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="12" r="9" stroke="#000000" stroke-width="2"/>
                    </svg>`;

    const openSubscription = () => {};

    return(
        <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{position: 'absolute', width: '100%', height: 100, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', top: 0}}>
                <View style={{width: '90%', height: 50, display: 'flex',justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <View style={{width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>SAFEVPN</Text>
                    </View>
                    <View style={{width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <TouchableOpacity style={{width: '60%', height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
                            <SvgXml xml={history} width="50%" height="100%"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{position: 'absolute',width: '100%', height: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', top: 80, zIndex: 1}}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>Fastest Location</Text>
                <Text style={{fontSize:  40, fontWeight: 'bold', color: 'green'}}>Niderlands</Text>
            </View>
            <ImageBackground source={require('./world.png')} resizeMode="cover" imageStyle={{opacity: 0.2}} style={{position: 'fixed', width: '100%', height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                    <LottieView
                        source={require("./connection.json")}
                        style={{width: "100%", height: "50%", marginBottom: 'auto'}}
                        autoPlay
                        loop
                        />
                </TouchableOpacity>
            </ImageBackground>
            <View  style={{position: 'absolute',width: '100%', height: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bottom: 200, zIndex: 1,gap: 25}}>
                <View style={{width: '100%', height: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Disconnected</Text>
                    <Text style={{fontSize: 15}}>Basic services</Text>
                </View>
                <View style={{width: '100%', borderBottomColor: 'green', borderBottomWidth: StyleSheet.hairlineWidth}}></View>
                <Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}>By using this app you agree to our terms and condition</Text>
                <TouchableOpacity style={style.ad} onPress={openSubscription}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>Upgrade To Pro</Text>
                    <Text style={{fontSize: 12, textAlign: 'center'}}>You can take advantage of features such as 24/7 support</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    ad: {
        width: '60%',
        display: 'flex', 
        flexDirection: 'column', 
        height: 100, 
        borderWidth: 1, 
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderColor: 'green'
    }
})