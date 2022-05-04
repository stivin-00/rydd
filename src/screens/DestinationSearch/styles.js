import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    padding: scale(10),
    height: '100%',
    marginTop: scale(80),
  },
  textInput: {
    padding: scale(10),
    backgroundColor: '#eee',
    marginVertical: scale(5),
    marginLeft: scale(20),
    color: 'black',
  },

  separator: {
    backgroundColor: '#efefef',
    height: scale(1),
  },
  listView: {
    position: 'absolute',
    top: scale(105),
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: scale(10),
    right: scale(10),
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(10),
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: scale(5),
    borderRadius: scale(50),
    marginRight: scale(15),
  },
  locationText: {},

  circle: {
    width: scale(5),
    height: scale(5),
    backgroundColor: 'black',
    position: 'absolute',
    top: scale(20),
    left: scale(15),
    borderRadius: scale(5),
  },
  line: {
    width: scale(1),
    height: scale(50),
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    top: scale(28),
    left: scale(17),
  },
  square: {
    width: scale(5),
    height: scale(5),
    backgroundColor: 'black',
    position: 'absolute',
    top: scale(80),
    left: scale(15),
  },
});

export default styles;
