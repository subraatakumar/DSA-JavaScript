# How to debug react native application

It’s really important for us as developers to have the skill of finding errors and the causes behind them. But sometimes the error may be hard to identify and that requires some additional tools and techniques which help us to understand the context behind these errors and resolve them.

In this video, after setting up our local environment, we’ll discuss the different tools and ways to catch errors and identify them starting from stack traces to setting up a full platform dedicated to debugging.

Debugging mobile applications locally is a little bit trickier than web apps which are easily integrated into the browser dev tools. So, let’s start checking the different tools to debug React Native app 

Usually, debugging the app locally is pretty easy because most of the time you’ll be able to tell exactly what’s wrong just by checking the stack trace. In development, it won’t be long before you encounter a Redbox error or Yellowbox warning.

Red box errors will show when a fatal error has occurred that prevents your app from running.
Yellow box will show to let you know of a possible issue that you should probably look into now or in the future before shipping the app.

A tool that is similar to the inspector that we use in Chrome. You can open the dev menu by doing:

Physical device: 👋 shake it.
iOS simulator: Cmd-Ctrl-Z in macOS.
Android emulator: Cmd-M in macOS or Ctrl-Min Windows.

Remote Debugging with Chrome Dev Tools — No Setup Needed
Once you run the project with expo start, run the emulator directly by typing i if you want to debug on iOS or a for Android. This will lunch your emulator running your app
Then, choose Debug Remote JS. This will open React Native Debugger under http://localhost:19000/debugger-ui/.

After that, you can open Chrome Dev Tools and navigate to the Sources tab. In the navigator, you can find debuggerWorker/127.0.0.1:1999/path-to-your-project.

Debugging with React Native Debugger — All In One Standalone App
React native debugger holds different tools all bundled into one, including React-DevTools, Redux DevTools, and network request inspection. So probably, this tool is one of the best candidates that can be used while debugging.

Debugging with Flipper — Full Platform for Mobile App Debugging
Flipper is an open-source platform for debugging iOS, Android and React Native in a simple desktop interface. It has already included tools to visualize and debug the codebase like log viewer, interactive layout inspector, and network inspector which will help us a lot to debug HTTP API requests.

[tutorial link](https://www.youtube.com/watch?v=4K_mgJi7AxU)
