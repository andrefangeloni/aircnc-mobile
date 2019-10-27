import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 20,
    marginBottom: 15,
    color: '#444',
  },
  bold: {
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 20,
  },
  listItem: {
    marginRight: 15,
  },
  thumbnail: {
    width: 200,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 2,
  },
  company: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  price: {
    marginTop: 5,
    fontSize: 15,
    color: '#999',
  },
  button: {
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 15,
    backgroundColor: '#f05a5b',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
