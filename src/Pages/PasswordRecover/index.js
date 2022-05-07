import { SafeAreaView, Text, View } from 'react-native'
import { Header } from '../../Components/Header'

import styles from './styles'

const PasswordRecover = ({ navigation }) => {

  function goBackNaavigate() {
    navigation.goBack()
  }


  return (
    <SafeAreaView style={styles.container}>
      <Header text='Recuperar Senha' goBack={goBackNaavigate} />
      <Text>PasswordRecover</Text>
    </SafeAreaView>
  )
}

export default PasswordRecover