import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4FF',
  },
  text: {
    fontSize: 50,
  },
  image: {
    height: 45,
    width: 45,
    borderColor: 'green',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  cardText: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
  },
  cardSubtitile: {
    marginRight: 90,
    marginLeft: 20,
    color: '#696969',
  },
  drawerMainContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
  },
  drawerImage: {
    paddingLeft: 10,
    width: 60,
  },
  drawerTextContainer: {
    marginLeft: 10,
  },
  drawerText: {
    fontSize: 18,
  },
  drawerTopContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
  },
  drawerHolla: {
    fontSize: 20,
  },
  drawerName: {
    fontSize: 16,
  },
  profileImage: {
    height: 110,
    width: 110,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  profileNameContainer: {
    padding: 30,
  },
  profileBold: {
    fontWeight: 'bold',
  },
  profileButton: {
    paddingRight: 15,
    paddingLeft: 15,
  },
  cardHeader: {
    backgroundColor: '#fd3d93',
    padding: 10,
    color: '#fff',
  },
  cardBody: {
    padding: 10,
  },
  cardRow: {
    paddingBottom: 10,
  },
  buttonOptions: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    color: '#fd3d93',
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fd3d93',
  },

  signUpImage: {
    height: 150,
    width: 150,
    borderRadius: 90,
  },
  signUpImageContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: 50,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  inputContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    marginRight: 10,
  },
  showPassword: {
    position: 'absolute',
    right: 0,
    marginRight: 5,
  },
  button: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#ff5c01',
  },
  buttonText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  loginBtnContainer: {
    marginVertical: 20,
    marginHorizontal: 100,
  },
  highlightedText: {
    color: '#ff5c01',
  },
  forgotPassword: {
    marginVertical:10
  },
});
