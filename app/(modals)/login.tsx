import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/styles';
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreenModal = () => {
  useWarmUpBrowser();
  return (
    <View style={styles.container}>
    <TextInput  autoCapitalize='none' placeholder='email' style={[defaultStyles.inputField, {marginBottom: 30}]}/>

    <TouchableOpacity style={defaultStyles.btn} >
    <Text style={defaultStyles.btnText}>
      Continue
    </Text>
    </TouchableOpacity>

    <View style={styles.separatorView} >
    <View style={{
      borderBottomColor: "#000",
      borderBottomWidth: StyleSheet.hairlineWidth,
      flex: 1
    }}/>
    <Text style={styles.separator}>or</Text>
    <View style={{
      borderBottomColor: "#000",
      borderBottomWidth: StyleSheet.hairlineWidth,
      flex: 1
    }}/>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 26,
  },
  separatorView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 30
  },
  separator: {
    fontFamily: "mon-sb",
    color: Colors.grey
  }
})
export default LoginScreenModal