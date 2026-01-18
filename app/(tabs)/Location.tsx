
import ButtonWithIcon from "@/components/ui/ButtonWithIcon";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Location()
{
    const profile = `<svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                
                <title>profile [#1336]</title>
                <desc>Created with Sketch.</desc>
                <defs>
    
            </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -2159.000000)" fill="#000000">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M334,2011 C337.785,2011 340.958,2013.214 341.784,2017 L326.216,2017 C327.042,2013.214 330.215,2011 334,2011 M330,2005 C330,2002.794 331.794,2001 334,2001 C336.206,2001 338,2002.794 338,2005 C338,2007.206 336.206,2009 334,2009 C331.794,2009 330,2007.206 330,2005 M337.758,2009.673 C339.124,2008.574 340,2006.89 340,2005 C340,2001.686 337.314,1999 334,1999 C330.686,1999 328,2001.686 328,2005 C328,2006.89 328.876,2008.574 330.242,2009.673 C326.583,2011.048 324,2014.445 324,2019 L344,2019 C344,2014.445 341.417,2011.048 337.758,2009.673" id="profile-[#1336]">
            </path>
                        </g>
                    </g>
                </g>
            </svg>`;
    
    const language = `<svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0H6V2H10V4H8.86807C8.57073 5.66996 7.78574 7.17117 6.6656 8.35112C7.46567 8.73941 8.35737 8.96842 9.29948 8.99697L10.2735 6H12.7265L15.9765 16H13.8735L13.2235 14H9.77647L9.12647 16H7.0235L8.66176 10.9592C7.32639 10.8285 6.08165 10.3888 4.99999 9.71246C3.69496 10.5284 2.15255 11 0.5 11H0V9H0.5C1.5161 9 2.47775 8.76685 3.33437 8.35112C2.68381 7.66582 2.14629 6.87215 1.75171 6H4.02179C4.30023 6.43491 4.62904 6.83446 4.99999 7.19044C5.88743 6.33881 6.53369 5.23777 6.82607 4H0V2H4V0ZM12.5735 12L11.5 8.69688L10.4265 12H12.5735Z" fill="#000000"/>
                    </svg>`;

    const subscription = `<svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14,6a7.17,7.17,0,0,0-1,.08A4.49,4.49,0,0,0,4,6.5V7A2,2,0,0,0,2,9v9a1.94,1.94,0,0,0,2,2H8.73A8,8,0,1,0,14,6ZM6,6.5a2.51,2.51,0,0,1,5-.24V7H6ZM14,20a6,6,0,1,1,6-6A6,6,0,0,1,14,20Zm-1.5-8v1h4a1,1,0,0,1,1,1v3a1,1,0,0,1-1,1H15v1H13V18H10.5V16h5V15h-4a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H13V9h2v1h2.5v2Z"/><rect width="24" height="24" fill="none"/></svg>`;                

    return(
        <ScrollView>
                <View style={{width: '100%', height: '100%',  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: '100%', height: 100, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', top: 0}}>
                                    <View style={{width: '90%', height: 50, display: 'flex',justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                        <View style={{width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
                                            <Text style={{fontSize: 15, fontWeight: 'bold'}}>SAFEVPN</Text>
                                        </View>
                                        <View style={{width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
                                        </View>
                                    </View>
                                </View>
                    <View style={{width: '90%', height: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, gap: 1}}>
                        <ButtonWithIcon icon={profile} title="Profile"/>
                        <View style={{width: '110%', borderBottomColor: 'green', borderBottomWidth: StyleSheet.hairlineWidth}}></View>
                        <ButtonWithIcon icon={language} title="Language"/>
                        <View style={{width: '110%', borderBottomColor: 'green', borderBottomWidth: StyleSheet.hairlineWidth}}></View>
                        <ButtonWithIcon icon={subscription} title="Subscription"/>
                        <View style={{width: '110%', borderBottomColor: 'green', borderBottomWidth: StyleSheet.hairlineWidth}}></View>
                    </View>
                </View>
                </ScrollView>
    );
}
