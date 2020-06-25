import { environment } from '../../environments/environment';

export const CONFIG = setEnvironment();

function setEnvironment() {
  if (environment.production) {
    return {
      API_URL: window.location.protocol + '//' + window.location.host
    };
  } else {
    return {
      API_URL: 'http://localhost:3000',
    };
  }
}
