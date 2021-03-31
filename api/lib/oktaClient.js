const okta = require("@okta/okta-sdk-nodejs");

const client = new okta.Client({
  orgUrl: "https://dev-70898042.okta.com",
  token: "",
});

module.exports = client;
  