# VoiceFlowExercise

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Deep Linking](#deep-linking)
- [Project Structure](#project-structure)

## Introduction

This project is a React Native demo application that implements a structured navigation flow using React Native Navigation, along with deep linking support. The app consists of:

- A splash screen
- An onboarding flow
- A main screen with settings and voicebot functionality
- A deep link implementation for direct navigation

## Prerequisites

Before setting up and running the project, ensure you have the following installed and configured:

- [Java JDK 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Android Studio](https://developer.android.com/studio)
- Node.js (LTS version recommended)
- npm or yarn
- React Native CLI
- Environment variables configured properly for React Native development ([Setup Guide](https://reactnative.dev/docs/set-up-your-environment))

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/OthmanGh/voiceFlowExercise.git
   cd voiceFlowExercise
   ```
2. Install dependencies:

   ```sh
   npm install
   ```

3. Ensure you have the necessary Android dependencies installed:
   ```sh
   cd android
   ./gradlew clean
   cd ..
   ```

## Running the App

1. Start the Metro Bundler:

   ```sh
   npm start
   ```

2. Run the application on an Android emulator or device:

   ```sh
   npx react-native run-android
   ```

3. If needed, ensure the development server is running:
   ```sh
   npm start --reset-cache
   ```

## Deep Linking

The app supports deep linking, allowing users to navigate directly to the "Set Company ID" screen. To test deep linking on an Android emulator or device, run the following command:

```sh
adb shell am start -W -a android.intent.action.VIEW -d "voiceflowexercise://setcompanyid"
```

## Project Structure

```
VoiceFlowExercise/
│── android/                 # Android-specific files
│── ios/                     # iOS-specific files
│── src/
│   ├── assets/              # Static assets (images, icons, etc.)
│   ├── components/          # Reusable UI components
│   ├── constants/           # Global constants
│   ├── navigation/          # Navigation stacks
│   ├── screens/             # All app screens
│   ├── styles/              # Global styles
│   ├── types/               # TypeScript type definitions
│   ├── App.tsx              # Entry point of the application
│   ├── linking.ts           # Deep linking configuration
│── package.json             # Project dependencies and scripts
│── README.md                # Documentation
│── tsconfig.json            # TypeScript configuration
```
