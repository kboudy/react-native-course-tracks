# react-native-course-blog-app

- navigation
  ![alt text](https://github.com/kboudy/react-native-course-tracks/blob/master/readme_images/navigators.png)

* need to install react navigation like this:

```sh
npm i react-navigation
npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack react-navigation-tabs
```

- need to use these react-navigation imports:

```js
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
```
