import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/styles";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreenModal = () => {
  useWarmUpBrowser();
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="email"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />

      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>
      {/* or section */}
      <View style={styles.separatorView}>
        <View
          style={{
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
            flex: 1,
          }}
        />
        <Text style={styles.separator}>or</Text>
        <View
          style={{
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
            flex: 1,
          }}
        />
      </View>

      {/* outline buttons */}
      <View style={{
        gap: 20
      }}>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons  name="call-outline" size={24} style={defaultStyles.btnIcon}/>
          <Text style={styles.btnOutlineText}>
            Continue with Phone
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons  name="logo-apple" size={24} style={defaultStyles.btnIcon}/>
          <Text style={styles.btnOutlineText}>
            Continue with Apple
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons  name="logo-google" size={24} style={defaultStyles.btnIcon}/>
          <Text style={styles.btnOutlineText}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons  name="logo-facebook" size={24} style={defaultStyles.btnIcon}/>
          <Text style={styles.btnOutlineText}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },
  separatorView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 30,
  },
  separator: {
    fontFamily: "mon-sb",
    color: Colors.grey,
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "mono-sb"
  }
});
export default LoginScreenModal;
