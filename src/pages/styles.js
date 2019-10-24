import { StyleSheet } from 'react-native'


const cstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'black'
  },

  toolbar: {
    backgroundColor: '#06305a',
    height: 56,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: 'white',
  },
  bottom: {
    backgroundColor: 'black',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  chip:{
    backgroundColor: 'white',
    height: 50,
    fontSize: 55,
    textAlign: 'center',
  }

})


export default cstyles;