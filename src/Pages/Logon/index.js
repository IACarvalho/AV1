import { useState } from 'react'
import { SafeAreaView, View, Alert } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

import { Header } from '../../Components/Header'

import styles from './styles'

const Logon = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [repeatEmail, setRepeatEmail] = useState('')

  function handleGoBack() {
    navigation.goBack()
  }

  function handleButtonClick() {
    if (email === repeatEmail && password === repeatPassword) {
      navigation.navigate('Login')
    } else {
      Alert.alert('As senhas não conferem')
    }
  }

  return (
    <View style={styles.container}>
      <Header text='Cadastro' goBack={handleGoBack} />
      <SafeAreaView style={styles.form}>
      <View style={styles.email}>
        <TextInput
          label='E-mail'
          value={email}
          style={styles.input}
          onChangeText={setEmail}
        />
        <TextInput
          label='Repitir E-mail'
          style={styles.input}
          value={repeatEmail}
          onChangeText={setRepeatEmail}
        />
      </View>
      <View style={styles.password}>
      <TextInput
          label='Senha'
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          label='Repitir Senha'
          style={styles.input}
          value={repeatPassword}
          onChangeText={setRepeatPassword}
        />
      </View>
      <Button
        style={styles.button}
        mode='contained'
        onPress={() => handleButtonClick()}
      >
        Cadastrar
      </Button>
    </SafeAreaView>
    </View>
  )
}

export default Logon