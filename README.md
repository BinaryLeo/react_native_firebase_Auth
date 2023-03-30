<div align="center" style="margin: 20px; text-align: center">
  <p>A simple authentication in react native and firebase</p>
  
  
  [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](https://github.com/BinaryLeo/react_native_firebase_Auth/blob/main/LICENSE)
  ![GitHub last commit](https://img.shields.io/github/last-commit/BinaryLeo/react_native_firebase_Auth?style=flat-square)
  ![GitHub top language](https://img.shields.io/github/last-commit/BinaryLeo/react_native_firebase_Auth?style=flat-square)
  
</div>

##### Install the dependencies

```bash
expo install firebase
expo install expo-constants dotenv
expo install react-native-gesture-handler
expo install react-native-screens
expo install react-native-safe-area-context
expo install react-native-masked-view
yarn add @react-navigation/native-stack @react-navigation/native
```

 Add your firebase backend config in the `firebase.js` file

 ```
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  databaseURL: Constants.manifest.extra.databaseURL
};
```
Add the credential values to the .env file.
By default and security, the .env file is added to gitignore

```
API_KEY=
AUTH_DOMAIN=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGING_SENDER_ID=
APP_ID=

```

App Flow

SignIn screen ---> Home screen

SignUp screen ---> SignInn screen ---> Home
