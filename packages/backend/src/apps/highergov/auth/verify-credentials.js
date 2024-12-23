const verifyCredentials = async ($) => {
  await $.http.get('/api-external/agency');

  await $.auth.set({
    screenName: $.auth.data.screenName,
    apiKey: $.auth.data.apiKey,
  });
};

export default verifyCredentials;
