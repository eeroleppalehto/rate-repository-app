import { Text, Pressable, View, StyleSheet } from "react-native";
import FormikTextInput from "./FormiktextInput";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from "yup";

const initialValues = {
  username: '',
  password: ''
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
};

const SignInForm = ({ onSubmit }) => (
  <View style={{display:"flex", paddingTop: 10, borderRadius: 5}}>
    <View style={{borderColor: "black", borderRadius: 5, margin: 3}}>
      <FormikTextInput name="username" placeholder="Username" style={styles.textInput} />
    </View>
    <View style={{borderColor: "black", borderRadius: 5, margin: 3}}>
      <FormikTextInput name="password" placeholder="Password" style={styles.textInput} secureTextEntry={true}/>
    </View>
    <Pressable onPress={onSubmit} style={{backgroundColor: theme.colors.primary, padding: 8, margin: 2, borderRadius: 5}}>
      <View style={{flexDirection: "row", justifyContent: "center"}}>
        <Text style={{color: "white", fontSize: 18}}>Login</Text>
      </View>
    </Pressable>
  </View>
)

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});


const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 5,
    padding: 8
  }
})
  
export default SignIn;