const okta = require("@okta/okta-sdk-nodejs");

const client = new okta.Client({
  orgUrl: "https://dev-70898042.okta.com",
  token: "00JiGrKLe-Pnr8Jhnagx8JrF25z2K8qRNhPaSGXwiP",
});

module.exports = client;
  