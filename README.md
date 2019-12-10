# react-native-course-tracks

- navigation
  ![alt text](https://github.com/kboudy/react-native-course-tracks/blob/master/readme_images/navigators.png)

* need to install react navigation like this:

* to recreate/duplicate this project from nothing:

```sh
npx expo-cli init someProjectName
npm i react-navigation
npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack react-navigation-tabs
npx expo-cli install react-native-maps
npx expo-cli install expo-location
```

- dev environment requires three terminals:

```sh
ngrok http 3000 # note the url you get, and update tracker.js
```

```sh
cd track-server && node index.js
```

```sh
npm start
```
