import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   flatListContainer: {
      width: '100%',
      height: 100,
      marginTop: 10,
      marginBottom: 50,
   },
   oval: {
      backgroundColor: "#E50914",
      padding: 2.5,
      height: 90,
      width: 90,
      borderRadius: 90,
   },
   capa: {
      height: 85,
      width: 85,
      borderRadius: 85,
   },
   logo: {
      width: 90,
      height: 45,
      position: 'absolute',
      zIndex: 10,
      bottom: 10,
      alignSelf: 'center',
   },
   gradient: {
      width: '100%',
      height: 60,
      position: 'absolute',
      zIndex: 9,
      bottom: 0,
   }
})

export default styles;