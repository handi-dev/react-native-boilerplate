# react-native-boilerplate

## What is React Native Boilerplate

It is a template that you can clone and reuse for every project. It is starting point for React Native application.

## React Native Boilerplate

consist of:

- react-native": "0.64.0"
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
6. Run `npx pod-install` from root of your project.

   If you got error like: `The version of CocoaPods used to generate the lockfile (x.x.x) is higher than the version of the current executable (x.x.x)`, then you can upgrade your cocoapods version.

   If you install cocoapods using homebrew, you can using this command: `brew upgrade cocoapods` if that does not work, try `brew install cocoapods`.

   If you previously install using `gem`, then use this command and run on your terminal: `sudo gem install cocoapods`.

   make sure your cocoapods version is updated after run that command.

   To check your current version of cocoapods, run `pod --version`.

   After that, don't forget to execute in your terminal `pod repo update`

   And, finally, run `npx pod-install`. Those methods must be solved that problem.

   Last method: If All the above steps not work, remove `Podfile.lock` in folder `ios` , and then run `npx pod-install`.

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
