import { OAuth2Client, generateCodeVerifier } from "@badgateway/oauth2-client";

const client = new OAuth2Client({
  server: "https://sg1.cern.ch",
  clientId: "50c37253-7b86-4368-8635-bfc534e810e2",
  discoveryEndpoint: "/.well-known/oauth-authorization-server",
});

const codeVerifier = await generateCodeVerifier();

// In a browser this might work as follows:
const url = await client.authorizationCode.getAuthorizeUri({
  // URL in the app that the user should get redirected to after authenticating
  redirectUri: "http://localhost",
  codeVerifier,
  scope: ["registrants"],
});

window.location.href = url
