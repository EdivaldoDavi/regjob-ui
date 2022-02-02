export const environment = {
  production: true,
  apiUrl: 'https://algamoney-api.herokuapp.com',
  tokenAllowedDomains: [ /algamoney-api.herokuapp.com/ ],
  tokenDisallowedRoutes: [/\/oauth2\/token/],
  oauthCallbackUrl: 'http://local-regjob.com:8000/authorized',
  logoutRedirectToUrl: 'http://local-regjob.com:8000'
};

