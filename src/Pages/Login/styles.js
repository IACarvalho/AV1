import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formContainer: {
    width: '90%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'absolute',
    top: '30%',
  },

  input: {
    width: '100%',
    backgroundColor: '#f6f6f6',
    marginVertical: 20
  },

  button: {
    position: 'absolute',
    bottom: '20%',
    width: '40%',
    height: 40,
  },

  buttons: {
    position: 'absolute',
    bottom: '7%',
    justifyContent: 'space-around'
  },
})

export default styles