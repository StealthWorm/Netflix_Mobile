import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   textWhite: {
      color:'#fff',
   },
   header: {
      position: 'absolute',
      top: 0,
      zIndex: 999,
      padding: 20,
   },
   headerSafeAreaView :{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%', 
      alignItems: 'center',
      height: 70,
   },

})

export default styles;