import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

export default function ButtonWithIcon({icon, title}) {
    const right_arrow = `<svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" /></svg>`;

    return(
        <View style={{width: '100%', height: 70, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: '50%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 'auto'}}>
                <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 'auto'}}>
                    <SvgXml xml={icon} width='50%' height='50%'/>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>{title}</Text>
                </View>
            </View>
            <View style={{width: '50%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 'auto'}}>
                <SvgXml xml={right_arrow} width='50%' height='50%' style={{marginLeft: 'auto'}}/>
            </View>
        </View>
    );
}