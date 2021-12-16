import { GraphQLObjectType } from 'graphql';
import getApps from './queries/get-apps';
import getApp from './queries/get-app';
import getConnectedApps from './queries/get-connected-apps';
import getAppConnections from './queries/get-app-connections';
import testConnection from './queries/test-connection';
import getFlows from './queries/get-flows';

const rootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getApps,
    getApp,
    getConnectedApps,
    getAppConnections,
    testConnection,
    getFlows
  }
});

export default rootQuery;