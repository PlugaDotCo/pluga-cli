/**
 * App handler
 *
 * @param {object} plg - Pluga developer platform toolbox.
 * @param {object} plg.axios - [axios](https://github.com/axios/axios)
 *
 * @param {object} event - Event bundle to handle.
 * @param {object} event.meta - Pluga event meta data.
 * @param {string} event.meta.baseURI - Environment base URI.
 * @param {object} event.auth - Your app.json auth fields.
 *
 * @returns {Promise} Promise object represents an array of resources to handle.
 */

exports.ping = (plg, event) => {
  /**
   * Use plg.axios for HTTP requests
   *
   * return plg.axios({
   *   method: 'get',
   *   url: `${event.meta.baseURI}/ping`,
   *   headers: {
   *     Authorization: `Bearer ${event.auth.access_token}`,
   *   },
   * }).then(res => { status: 200, result: { auth: 'OK' } })
   *   .catch((err) => { status: 401, result: 'Not authorized' });
   */
};
