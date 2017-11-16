// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  userURL: 'http://localhost:9080/user',
  policyURL: 'http://localhost:9082/policies'
  // userURL: 'https://gateway.api.cloud.wso2.com:443/t/cts8650/users/1.0.0',
  // policyURL: 'https://gateway.api.cloud.wso2.com:443/t/cts8650/policies/1.0.0',
  // tokenURL: 'https://cors-anywhere.herokuapp.com/https://gateway.api.cloud.wso2.com:443/token',
  // tokenAuthKey: 'Basic RkdUY1lLZktxUUxEaDczY0gzR0NzTFJabkRJYTp4Q3hCUFk3Rm5neUU4Wmk4VjF4MTNQekIxMlVh'

};
