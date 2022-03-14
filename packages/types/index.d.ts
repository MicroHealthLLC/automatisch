// Type definitions for automatisch

export type IJSONValue = string | number | boolean | IJSONObject | IJSONArray;
export type IJSONArray = Array<IJSONValue>;
export interface IJSONObject {
  [x: string]: IJSONValue;
}

export interface IConnection {
  id: string;
  key: string;
  data: string;
  formattedData: IJSONObject;
  userId: string;
  verified: boolean;
  count: number;
  createdAt: string;
}

export interface IExecutionStep {
  id: string;
  executionId: string;
  stepId: string;
  dataIn: IJSONObject;
  dataOut: IJSONObject;
  status: string;
}

export interface IExecution {
  id: string;
  flowId: string;
  flow: IFlow;
  testRun: boolean;
  executionSteps: IExecutionStep[];
  createdAt: string;
}

export interface IStep {
  id: string;
  name: string;
  flowId: string;
  key: string;
  appKey: string;
  type: 'action' | 'trigger';
  connectionId: string;
  status: string;
  position: number;
  parameters: Record<string, unknown>;
  connection: Partial<IConnection>;
  flow: IFlow;
  executionSteps: IExecutionStep[];
  // FIXME: remove this property once execution steps are properly exposed via queries
  output: IJSONObject;
}

export interface IFlow {
  id: string;
  name: string;
  userId: string;
  active: boolean;
  steps: IStep[];
}

export interface IUser {
  id: string;
  email: string;
  password: string;
  connections: IConnection[];
  flows: IFlow[];
  steps: IStep[];
}

export interface IField {
  key: string;
  label: string;
  type: string;
  required: boolean;
  readOnly: boolean;
  value: string;
  placeholder: string | null;
  description: string;
  docUrl: string;
  clickToCopy: boolean;
  name: string;
  variables: boolean;
}

export interface IAuthenticationStepField {
  name: string;
  value: string | null;
  properties: {
    name: string;
    value: string;
  }[];
}

export interface IAuthenticationStep {
  step: number;
  type: 'mutation' | 'openWithPopup';
  name: string;
  arguments: IAuthenticationStepField[];
}

export interface IApp {
  name: string;
  key: string;
  iconUrl: string;
  docUrl: string;
  primaryColor: string;
  fields: IField[];
  authenticationSteps: IAuthenticationStep[];
  reconnectionSteps: IAuthenticationStep[];
  connectionCount: number;
  triggers: any[];
  actions: any[];
  connections: IConnection[];
}

export interface IService {
  authenticationClient: IAuthentication;
}

export interface IAuthentication {
  appData: IApp;
  connectionData: IJSONObject;
  client: unknown;
  verifyCredentials(): Promise<IJSONObject>;
  isStillVerified(): Promise<boolean>;
}

export interface ISubstep {
  name: string;
  arguments: IField[];
}