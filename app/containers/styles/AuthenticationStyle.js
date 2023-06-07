import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 30,
    color: 'black',
  },
  input: {
    padding: 12,
    fontSize: 15,
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.7,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default styles;
