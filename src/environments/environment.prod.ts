// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const getUrl = window.location;
// const HOST_API = getUrl.protocol + '//' + getUrl.host;
const HOST_API = 'https://dreambanknode.herokuapp.com';

export const environment = {
  production: true,
  HOST_API: HOST_API,
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
  },
  services: {
    login: {
      login: `${HOST_API}/api/auth/login`
    },
    user: {
      getAllProductByClient:`${HOST_API}/api/user/getAllProductByClient`,
      getDetailProduct:`${HOST_API}/api/user/getDetailProduct`,
      createProduct: `${HOST_API}/api/user/createProduct`
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
