import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    backgroundColor: '#025E33',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 30,
    flexDirection: 'row',
  },

  text: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '700',
  },

  logoutIcon: {
    position: 'absolute',
    right: 0,
  },

  backIcon: {
    position: 'absolute',
    left: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  textIcons: {
    color: '#025E33',
    fontWeight: '700',
  }
})

export default styles