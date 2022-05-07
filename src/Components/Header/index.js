import { Text, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

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
        <TouchableOpacity 
          style={styles.logoutIcon}
          onPress={() => logout()}
        >
        <AntDesign name="logout" size={24} color="#fff" />
      </TouchableOpacity>
      )
    }
  }

  return (
    <View style={styles.container}>
      {renderBack()}
      <Text style={styles.text}>{text}</Text>
      { renderLogout() }
    </View>
  )
}

export { Header }