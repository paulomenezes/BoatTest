module.exports = {
  container: { flex: 1 },
  inputArea: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    shadowColor: '#E6E6E6',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0
  },
  inputIconArea: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: { flex: 1, padding: 10, height: 40, fontFamily: 'OpenSans-Regular', fontSize: 14 },
  validField: { borderColor: '#CFCFCF' },
  invalidField: { borderColor: '#D75452' },
  icon: { paddingLeft: 10 }
};
