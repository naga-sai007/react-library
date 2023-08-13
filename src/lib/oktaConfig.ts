export const oktaConfig = {
    clientId: '0oaamgt6wqgCWi4sI5d7',
    issuer: 'https://dev-67919541.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}