# react-native-boilerplate

## What is React Native Boilerplate
 It is a template that you can clone and reuse for every project. It is starting point for React Native application.

## React Native Boilerplate

consist of:

- react-native": "0.63.4"
- react-navigation and its dependencies
- redux, redux persist and redux thunk
- react native vector icons
- react-native async storage

## Getting Started

1. Clone this repo, `git clone https://github.com/handi-dev/react-native-boilerplate.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder, `rm -rf .git`
4. Use [React Native Rename](https://github.com/junedomingo/react-native-rename) to update project name `$ npx react-native-rename <newName>`
5. Run `npm install` to install dependencies
6. Run `npx pod-install` from root of your project
7. Start the packager with `npm start`
8. Connect your device or use emulator that's installed in your pc
9. Run the test application:

- On Android:
  - Run `npx react-native run-android`
- On iOS:
  - Open `npx react-native run-ios`

9. Enjoy!!!

## List of Q & A:

  #### I got error `Error: spawn ./gradlew EACCES` when run `npx react-native run-android`.
  Run this command `chmod 755 android/gradlew` from your root project directory

  #### I got error `Error: SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.`
  - Go to your Project -> Android
  - Create a file local.properties
  - Open the file
  - Paste your Android SDK path depending on the operating system:

    - Windows:
      sdk.dir=C:/Users/`USERNAME`/AppData/Local/Android/sdk
    - Linux or MacOS
      sdk.dir=/home/`USERNAME`/Android/sdk

  - Replace `USERNAME` with your PC username
