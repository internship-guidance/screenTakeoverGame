import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232528'
  },
  subView: {
    flex:2,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#232528'
  },
  counter: {
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontSize: 50,
    color: 'white',
    padding: 80,
    margin: 30
  },
  reset: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#5B8930',
    fontSize: 30,
    borderRadius: 10,
    overflow: 'hidden',
    color: 'white',
    padding: 10,
    width: 300,
    margin: 5
  },
  plus: {
    flex: 3,
    alignItems: 'flex-end',
    textAlignVertical: 'center',
    textAlign: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#26C281',
    height: 470,
    width: 400,
    fontSize: 30,
    color: 'white',
    overflow: 'hidden',
    padding: 20,
    margin: 5
  },
  minus: {
    flex: 3,  
    alignItems: 'flex-end',
    textAlign: 'center',
    textAlignVertical: 'top',
    justifyContent: 'flex-start',
    backgroundColor: '#4D8FAC',
    transform: [{ rotate: '180deg'}],
    fontSize: 30,
    color: 'white',
    height: 470,
    width: 400,
    overflow: 'hidden',
    padding: 20,
    margin: 5

  },
  scoreShare: {
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: '#5B8930',
    fontSize: 20,
    color: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 5,
    margin: 5,
    height: 50,
    width: 300
  }
});
