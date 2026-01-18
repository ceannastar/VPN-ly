import { Text, View } from "react-native";

import { SvgXml } from 'react-native-svg';

export default function AppBar() 
{
        const xml = `<svg width="50px" height="50px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000" />
                    </svg>`;
    return (
    <View style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: '90%', height: '100%', backgroundColor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{width: '20%', visibility: 'hidden', marginRight: 'auto'}}>
                                <SvgXml xml={xml} width="50%" height="50%"/>
                            </View>
                            <Text style={{fontSize: 23}}>Change Location</Text>
                            <View style={{width: '20%', opacity: 0, marginLeft: 'auto'}}>
                                <SvgXml xml={xml} width="50%" height="50%"/>
                            </View>
                    </View >
    </View>
    );
}