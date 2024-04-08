import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Left from 'react-native-vector-icons/AntDesign';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-fontawesome-pro';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../../Styles/fontFamily';
import colors from '../../Styles/colors';

const MainHeader = ({text, iconName, onpressBtn, rightIcon, textcolor}) => {
  return (
    <>
      <View
        style={styles.mainHeader}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.headerChild}>
          <TouchableOpacity
            onPress={onpressBtn}
            style={{flex:0.15}}
            >
            <Icon type="solid" name="arrow-left" size={hp(3)} color="#2CC2E4" />
          </TouchableOpacity>
          <View style={{flex:0.4,marginTop:hp(-0.5)}}>
            <Text style={styles.textstyle}>{text}</Text>
          </View>
          <View style={{marginVertical: hp(0.3),flex:0.5}}>
          </View>
        </View>
      </View>
    </>
  );
};

export default MainHeader;

const styles = EStyleSheet.create({
  mainHeader: {
    flex:1,
    marginTop:hp(2),
  },
  headerChild: {
    marginTop: hp(6),
    flexDirection: 'row',
    
    justifyContent: 'space-between',
    marginHorizontal: hp(2.5),
  },
  textstyle: {
    color:colors.blackColor,
    marginTop: hp(0),
    fontSize: hp(2.5),
    fontWeight: '600',
    fontFamily: fontFamily.robotoMedium,
    fontStyle: 'normal',
  },
});
