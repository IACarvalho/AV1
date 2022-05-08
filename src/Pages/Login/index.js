import { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { Header } from '../../Components/Header'

import styles from './styles'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [passwordIsNotVisible, setPasswordIsNotValid] = useState(true)
  const [icon, setIcon] = useState('eye')

  function handlePasswordVisibility() {
    if (icon === 'eye') {
      setIcon('eye-off')
    } else {
      setIcon('eye')
    }
    setPasswordIsNotValid(!passwordIsNotVisible)
  }

  function handleLogin() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    }, 500)
  }

  return (
    <View>
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
            secureTextEntry = {passwordIsNotVisible}
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
      </SafeAreaView>
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
    </View>
  )
}

export default Login