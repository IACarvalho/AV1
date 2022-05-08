import { Text, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Button } from 'react-native-paper'

import styles from './styles'

const Header = ({ text, goBack = null, logout = null}) => {

  function renderBack() {
    if (goBack) {
      return (
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => goBack()}
        >
        <AntDesign name="leftcircleo" size={24} color="#fff" />
      </TouchableOpacity>
      )
    }
  }

  function renderLogout() {
    if (logout) {
      return (
        <Button 
          icon="logout"
          Type="outline" 
          mode="text"
          style={styles.logoutIcon}
          color='#fff' 
          onPress={() => logout()}
        >Sair</Button>
      )
    }
  }

  return (
    <View style={styles.container}>
      {renderBack()}
      <Text style={styles.text}>{text}</Text>
      {renderLogout()}
    </View>
  )
}

export { Header }