import Reflux from 'reflux';

const actions = Reflux.createActions([
  'getData',
  'changeLanguage',
  'getDataFromRouter',
  'changeInput',
  'handleSubmit',
  'getTranslations',
]);

export default actions;
