import defineAction from '../../../../helpers/define-action.js';
import fields from '../../common/fields.js';

export default defineAction({
  name: 'Hospitals',
  key: 'listHospitals',
  description: 'list all hospitals for a specific dataset',
  arguments: fields,

  async run($) {
    const { distributionId, limit, offset: offsetParam } = $.step.parameters;
    const offset = offsetParam || 0;
    const params = new URLSearchParams({
      limit: limit,
      offset: offset,
    });
    const { data } = await $.http.get(
      `/provider-data/api/1/datastore/query/${distributionId}?${params.toString()}`
    );
    $.setActionItem({ raw: data });
  },
});
