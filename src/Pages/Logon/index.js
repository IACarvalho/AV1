import { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { TextInput, Button, Dialog, Portal, Paragraph } from 'react-native-paper'

import { Header } from '../../Components/Header'

import styles from './styles'

const Logon = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [repeatEmail, setRepeatEmail] = useState('')
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')
  const [messageTitle, setMessageTitle] = useState('')
  const [icon, setIcon] = useState('eye')
  const [passwordIsNotVisible, setPasswordIsNotValid] = useState(true)


  function hideDialog() {
    setVisible(false)
  }

  function handleGoBack() {
    navigation.goBack()
  }

  function handlePasswordVisibility() {
    if (icon === 'eye') {
      setIcon('eye-off')
    } else {
      setIcon('eye')
    }
    setPasswordIsNotValid(!passwordIsNotVisible)
  }

  function handleButtonClick() {
    if (email !== repeatEmail){
      setMessage('E-mails não conferem')
      setMessageTitle('Erro')
      setVisible(true)
      return
    }

    if (password !== repeatPassword){
      setMessage('Senhas não conferem')
      setMessageTitle('Erro')
      setVisible(true)
      return
    }


    if ( email === '' || repeatEmail === '' ) {
      setMessage('Preencha o campo de e-mail')
      setMessageTitle('Erro')
      setVisible(true)
      return
    }

    if (password === '' || repeatPassword === '') {
      setMessage('Preencha o campo de senha')
      setMessageTitle('Erro')
      setVisible(true)
      return
    } 
      navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <Header text='Cadastro' goBack={handleGoBack} />
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{messageTitle}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{message}</Paragraph>
          </Dialog.Content>
        </Dialog>
      </Portal>
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
          secureTextEntry = {passwordIsNotVisible}
          right={<TextInput.Icon name={icon} onPress={() => handlePasswordVisibility()} />}
        />
        <TextInput
          label='Repitir Senha'
          style={styles.input}
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          secureTextEntry = {passwordIsNotVisible}
          right={<TextInput.Icon name={icon} onPress={() => handlePasswordVisibility()} />}
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