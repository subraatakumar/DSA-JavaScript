# How to use camera in React Native ?

To use the camera we need permission in android phone. Ask the permissions in AndroidManifest.xml file.

```
<uses-permission android:name="android.permission.CAMERA" />
```

To enable video recording feature we need 3 more permissions.

```
<uses-permission android:name="android.permission.RECORD_AUDIO"/> 
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" /> 
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

For IOS, we must update the Info.plist with a usage description for camera

```
<key>NSCameraUsageDescription</key> <string>Your own description of the purpose</string>
```
