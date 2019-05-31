# hnp-test-assignment app 

## Features
* Add new patients
    * Fields and validators implemented
    * Phone validation implemented
* View all patients
* View details about patient

## Environment
Node.js ~ 12.1.0 <br/>
NPM ~ 6.9.0

##Pre-requirements
Ionic and Cordova should be installed globally:
* npm i -g ionic cordova native-run

## Development server
Run `npm run start-lab` for ionic lab server. Navigate to `http://localhost:8200/`.

## Build
For iOS build you should have xcode installed on your system, and android studio for android.<br/>
Run `npm run build-ios` to build iOS package.<br/>
Run `npm run build-android` to build apk for Android.

## Running unit tests
Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).<br>
Run `npm run lint` to execute TSLint tests

