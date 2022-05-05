import { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, FlatList } from 'react-native'
import styles from './styles'

import Ball from '../../Components/Ball'
import { Header } from '../../Components/Header'

const Layout = () => {
  const [data, setData] = useState([])
  
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

  useEffect(() => {
    generateData()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Header text = 'Number generator' />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numberOfRows={2}
        numberOfColumns={4}
        contentContainerStyle={styles.contentContainer}
      />

      <TouchableOpacity style={styles.button} onPress={() => generateData()}>
        <Text style={styles.buttonText}>Gerar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Layout