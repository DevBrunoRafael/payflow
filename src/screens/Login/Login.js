import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useState } from 'react'
// import { signInWithEmailAndPassword } from 'firebase/auth'
// import auth from '../../config/firebase'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // signInWithEmailAndPassword(auth, email, password)
    //   .then(userCredential => {
    //     // Signed in
    //     const user = userCredential.user
    //     alert(email)
    //   })
    //   .catch(error => {
    //     const errorMessage = error.message
    //     alert(errorMessage)
    //   })
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChange={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          value={password}
          onChange={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonLoginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          // onPress={handleSignup}
        >
          <Text style={[styles.buttonRegisterText]}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  button: {
    backgroundColor: '#0782f9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonLoginText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
  buttonRegisterText: {
    color: '#0782f9',
    fontWeight: '700',
    fontSize: 16
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782f9',
    borderWidth: 2
  }
})
