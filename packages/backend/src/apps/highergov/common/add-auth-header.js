const addAuthHeader = ($, requestConfig) => {
  if ($.auth.data?.apiKey) {
    requestConfig.params = {
      ...requestConfig.params,
      api_key: $.auth.data.apiKey,
    };
  }

  return requestConfig;
};

export default addAuthHeader;
