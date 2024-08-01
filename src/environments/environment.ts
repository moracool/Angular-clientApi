// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//variables de ambiente para utilizar en desarrollo
/*
const customerService = {
  url: 'https://formacioncbb.bcnschool.net/webservice/rest/server.php',
  url_login: 'https://formacioncbb.bcnschool.net/login/token.php',  
}
*/

const customerService = {
  url: 'https://jsonplaceholder.typicode.com/',  
}

export const environment = {
  production: false,
  customerService
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
