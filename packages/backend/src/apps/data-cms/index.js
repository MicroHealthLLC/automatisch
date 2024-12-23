import defineApp from '../../helpers/define-app.js';
import actions from './actions/index.js';

export default defineApp({
  name: 'Data.Cms',
  key: 'data-cms',
  iconUrl: '{BASE_URL}/apps/data-cms/assets/favicon.svg',
  authDocUrl: '',
  supportsConnections: false,
  baseUrl: 'https://data.cms.gov/',
  apiBaseUrl: 'https://data.cms.gov',
  primaryColor: '#6f42c1',
  actions,
});
