import { View, Text } from 'react-native'
import styles from './styles'


const Ball = ({number}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </View>
  )
}

export default Ball