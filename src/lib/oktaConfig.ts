export const oktaConfig = {
    clientId: '0oaamgt6wqgCWi4sI5d7',
    issuer: 'http://dev-67919541.okta.com/oauth2/default',
    redirectUri: 'http://react-library-bucket.s3-website.ap-south-1.amazonaws.com/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
