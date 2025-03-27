import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/styles";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useOAuth, useSSO } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as AuthSession from "expo-auth-session";
import * as Linking from 'expo-linking'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";



enum Strategies {
  GOOGLE="oauth_google",
  APPLE= "ouath_apple",
  FACEBOOK= "oauth_facebook",
}
const LoginScreenModal = () => {
  useWarmUpBrowser();
 const {startSSOFlow} = useSSO();

  const router = useRouter();

  const onSelectAuth = async  (strategy: Strategies)  => {


    try {
      const {createdSessionId, setActive} = await startSSOFlow({
        strategy: "oauth_google",
        redirectUrl: AuthSession.makeRedirectUri({scheme: "myapp", path: "/"})
      });
      if(createdSessionId) {
        router.back();
        setActive!({session: createdSessionId});
      }
    } catch (err) {
      console.error("OAuth Error", err);
    }
  }
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
        <TouchableOpacity onPress={() => onSelectAuth(Strategies.APPLE)} style={styles.btnOutline}>
          <Ionicons  name="logo-apple" size={24} style={defaultStyles.btnIcon}/>
          <Text style={styles.btnOutlineText}>
            Continue with Apple
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategies.GOOGLE)}>
          <Ionicons  name="logo-google" size={24} style={defaultStyles.btnIcon}/>
          <Text style={styles.btnOutlineText}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline} onPress={( ) => onSelectAuth(Strategies.FACEBOOK)}>
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
