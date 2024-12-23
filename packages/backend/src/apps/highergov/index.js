import defineApp from '../../helpers/define-app.js';
import addAuthHeader from './common/add-auth-header.js';
import auth from './auth/index.js';
import actions from './actions/index.js';

export default defineApp({
  name: 'HigherGov',
  key: 'highergov',
  iconUrl: '{BASE_URL}/apps/highergov/assets/favicon.svg',
  authDocUrl: '',
  supportsConnections: true,
  baseUrl: 'https://www.highergov.com/',
  apiBaseUrl: 'https://www.highergov.com',
  primaryColor: '#6f42c1',
  beforeRequest: [addAuthHeader],
  auth,
  actions,
});
