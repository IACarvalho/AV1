import { useState } from 'react'
import { SafeAreaView} from 'react-native'
import { Header } from '../../Components/Header'
import { TextInput, Button } from 'react-native-paper'

import styles from './styles'

const PasswordRecover = ({ navigation }) => {
  const [email, setEmail] = useState('')

  function handleGoBack() {
    navigation.goBack()
  }

  const handleButtonPress = () => {
    navigation.navigate('Login')
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Header text='Recuperar Senha' goBack={handleGoBack} />
      <TextInput 
        placeholder='E-mail'
        style={ styles.input }
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Button
        style={styles.button}
        mode="contained"
        onPress={() => handleButtonPress()}
      >
        Recuperar
      </Button>
    </SafeAreaView>
  )
}

export default PasswordRecover