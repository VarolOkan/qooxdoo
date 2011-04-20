/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tristan Koch (tristankoch)

************************************************************************ */

/**
 * Basic authentication.
 */
qx.Class.define("qx.io.request.auth.BasicDelegate",
{

  extend: qx.core.Object,

  implement: qx.io.request.auth.IAuthDelegate,

  properties:
  {
    /**
     * Authenticate with username.
     */
    username: {
      check: "String",
      nullable: true
    },

    /**
     * Authenticate with password.
     */
    password: {
      check: "String",
      nullable: true
    }
  },

  members :
  {
    /**
     * Headers to include for basic authentication.
     */
    getAuthHeaders: function() {
      var credentials = qx.util.Base64.encode(this.getUsername() + ':' + this.getPassword());
      return [
        {key: "Authorization", value: "Basic " + credentials}
      ];
    }
  }
});
