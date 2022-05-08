import { useState } from 'react'
import { View, FlatList, ScrollView } from 'react-native'
import { Button } from 'react-native-paper'

import styles from './styles'

import Ball from '../../Components/Ball'
import { Header } from '../../Components/Header'

const Layout = ({ navigation }) => {
  const [data, setData] = useState([])

  function handleLogout() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    })
  }
  
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function alreadyExists(number, balls) {
    return balls.find(ball => ball === number)
  }

  function generateBalls() {
    const balls = []
    for (let i = 0; i < 6; i++) {
      const number = getRandom(1, 60)
      if (!alreadyExists(number, balls)) {
        balls.push(number)
      }
      else {
        i--
      }
    }
    return balls.sort((a, b) => a - b)
  }

  function generateData() {
    setData([])
    const balls = generateBalls()
    const data = balls.map(ball => ({
      key: ball,
      ball: ball,
    }))
    setData(data)
  }

  function renderItem({ item }) {
    return (
      <Ball number={item.ball} />
    )
  }
  
  return (
    <View style={styles.container}>
      <Header text = 'Sortear Números' logout={handleLogout} />
        <ScrollView>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.key}
            contentContainerStyle={styles.contentContainer}
          />
        </ScrollView>

        <Button 
          style={styles.button}
          mode="contained"
          onPress={() => generateData()}
        >
          Sortear
        </Button>
    </View>
  )
}

export default Layout