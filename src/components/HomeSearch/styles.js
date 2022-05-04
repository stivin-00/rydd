import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#e7e7e7',
    margin: scale(10),
    padding: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: scale(50),
    alignItems: 'center',
  },
  inputText: {
    fontSize: scale(20),
    fontWeight: '600',
    color: '#434343',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: scale(100),
    padding: scale(10),
    backgroundColor: '#fff',
    borderRadius: scale(50),
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(15),
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: scale(10),
    borderRadius: scale(25),
  },
  destinationText: {
    marginLeft: scale(10),
    fontWeight: '500',
    fontSize: scale(16),
  },
});

export default styles;
