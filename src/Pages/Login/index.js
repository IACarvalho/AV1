import { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { Header } from '../../Components/Header'

import styles from './styles'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [passwordIsNotValid, setPasswordIsNotValid] = useState(true)
  const [icon, setIcon] = useState('eye')

  function handlePasswordVisibility() {
    if (icon === 'eye') {
      setIcon('eye-off')
    } else {
      setIcon('eye')
    }
    setPasswordIsNotValid(!passwordIsNotValid)
  }

  function handleLogin() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigation.navigate('Home')
    }, 500)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header text='Entrar'/>
      <View style={ styles.formContainer }>
        <TextInput 
          placeholder='E-mail'
          style={ styles.input }
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder='Senha'
          style={ styles.input }
          value={password}
          secureTextEntry = {passwordIsNotValid}
          right={<TextInput.Icon name={icon} onPress={() => handlePasswordVisibility()} />}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Button
        style={styles.button}
        mode="contained"
        loading={loading}
        onPress={() => handleLogin()}
      >
        Entrar
      </Button>
      <View style={styles.buttons}>
        <Button
          onPress={() => navigation.navigate('PasswordRecover')}
        >
          Esqueci minha senha
        </Button>
        <Button
          onPress={() => navigation.navigate('Logon')}
        >
          Criar uma conta
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default Login