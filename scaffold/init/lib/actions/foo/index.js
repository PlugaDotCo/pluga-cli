/**
 * Action handler
 *
 * @param {object} plg - Pluga developer platform toolbox.
 * @param {object} plg.axios - [axios](https://github.com/axios/axios)
 *
 * @param {object} event - Event bundle to handle.
 * @param {object} event.meta - Pluga event meta data.
 * @param {string} event.meta.baseURI - Environment base URI.
 * @param {object} event.auth - Your app.json auth fields.
 * @param {object} event.input - Your meta.json fields.
 *
 * @returns {Promise} Promise object represents the action result.
 */

exports.handle = (plg, event) => {
  /**
   * Use `plg.axios` for HTTP requests
   *
   * return plg.axios({
   *   method: 'post',
   *   url: `${event.meta.baseURI}/foo`,
   *   headers: {
   *     Authorization: `Bearer ${event.auth.access_token}`,
   *   },
   *   data: {
   *     arg: event.input.a
   *   },
   * }).then((res) => res.data).catch((err) => {
   *   throw plg.errors.error(err.response.data.error);
   * });
   */
};

exports.meta = {
  name: 'Foo',
  description: 'Foo description',
  action_fields: {
    fields: [
      {
        key: 'a',
        name: {
          pt_BR: 'A',
          en: 'A',
        },
        description: {
          pt_BR: '"A" field description',
          en: '"A" field description',
        },
        required: true,
        advanced: false,
        field_type: 'custom',
        data_type: 'string',
      },
    ],
  },
};
