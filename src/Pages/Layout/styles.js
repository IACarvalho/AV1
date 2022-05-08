import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    width: '100%',
    height: '5%',
    textAlign: 'center',
    position: 'absolute',
    color: '#fff',
    top: 30,
    fontWeight: '700',
    backgroundColor: 'green',
  },

  numbersContainer: {
    width: '90%',
    height: '30%',
    position: 'absolute',
    top: '20%',
    flexDirection: 'row',
  },

  button: {
    width: '60%',
    height: 40,
    position: 'absolute',
    bottom: '10%',
  },

  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40%',
  }
})

export default styles