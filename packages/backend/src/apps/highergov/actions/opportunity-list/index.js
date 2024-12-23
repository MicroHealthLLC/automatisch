import defineAction from '../../../../helpers/define-action.js';

export default defineAction({
  name: 'Opportunity List',
  key: 'opportunityList',
  description: '',
  arguments: [
    {
      label: 'Agency Key',
      key: 'agencyKey',
      type: 'string',
      required: false,
      variables: true,
      description: '',
    },
    {
      label: 'Captured Date',
      key: 'capturedDate',
      type: 'string',
      required: false,
      variables: true,
      description: 'format: yyyy-mm-dd',
    },
    {
      label: 'Opportunity key',
      key: 'oppKey',
      type: 'string',
      required: false,
      variables: true,
      description: '',
    },
    {
      label: 'Ordering',
      key: 'ordering',
      type: 'dropdown',
      required: false,
      variables: true,
      description: '',
      options: [
        { label: '-captured_date', value: '-captured_date' },
        { label: '-due_date', value: '-due_date' },
        { label: '-posted_date', value: '-posted_date' },
        { label: 'captured_date', value: 'captured_date' },
        { label: 'due_date', value: 'due_date' },
        { label: 'posted_date', value: 'posted_date' },
      ],
    },
    {
      label: 'Page Number',
      key: 'pageNumber',
      type: 'string',
      required: false,
      variables: true,
      description: '',
    },
    {
      label: 'Page Size',
      key: 'pageSize',
      type: 'string',
      required: false,
      variables: true,
      description: '',
    },
    {
      label: 'Posted Date',
      key: 'postedDate',
      type: 'string',
      required: false,
      variables: true,
      description: 'format: yyyy-mm-dd',
    },
    {
      label: 'Search Id',
      key: 'searchId',
      type: 'string',
      required: false,
      variables: true,
      description: '',
    },
    {
      label: 'Source Id',
      key: 'sourceId',
      type: 'string',
      required: false,
      variables: true,
      description: '',
    },
    {
      label: 'Source Type',
      key: 'sourceType',
      type: 'string',
      required: false,
      variables: true,
      description: '',
    },
    {
      label: 'Version key',
      key: 'versionKey',
      type: 'string',
      required: false,
      variables: true,
      description: '',
    },
  ],

  async run($) {
    const paramMappings = {
      agencyKey: 'agency_key',
      capturedDate: 'captured_date',
      oppKey: 'opp_key',
      ordering: 'ordering',
      pageNumber: 'page_number',
      pageSize: 'page_size',
      postedDate: 'posted_date',
      searchId: 'search_id',
      sourceId: 'source_id',
      sourceType: 'source_type',
      versionKey: 'version_key',
    };

    const params = Object.entries(paramMappings).reduce((acc, [key, value]) => {
      if ($.step.parameters[key]) {
        acc[value] = $.step.parameters[key];
      }
      return acc;
    }, {});

    const { data } = await $.http.get('/api-external/opportunity/', { params });

    $.setActionItem({ raw: data });
  },
});
