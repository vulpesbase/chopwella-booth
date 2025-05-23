# 📲 Chopwella Booth App

A production-ready **Android kiosk-mode application** built with **Expo SDK 52** and **React Native**, designed to wrap the [Chopwella web platform](https://chopwella-base.vercel.app) via WebView. This app enables seamless **QR code scanning**, **event check-ins**, and **secure booth operations** in a locked-down kiosk environment.

---

## 🔗 Live Web App
> Hosted at: [https://chopwella-base.vercel.app](https://chopwella-base.vercel.app)

---

## 🚀 Features

- 📷 **Camera-enabled WebView** for in-app QR scanning  
- 🔒 **Kiosk-ready** (full-screen, no navigation, controlled flow)  
- ⚡ **Fast & lightweight** native wrapper using `react-native-webview`  
- ✅ Compatible with **Expo Bare Workflow**  
- 📦 Built in **release mode** for stable APK deployment  

---

## 🧱 Tech Stack

| Layer        | Tool/Version           |
|--------------|------------------------|
| Framework    | Expo SDK 52 (Bare)     |
| Runtime      | React Native 0.76.9    |
| WebView      | `react-native-webview@13.12.5` |
| Hosting      | Vercel (for web app)   |
| QR Scanning  | Powered by [`@yudiel/react-qr-scanner`](https://www.npmjs.com/package/@yudiel/react-qr-scanner) (in web app) |

---

## 🔧 Build Instructions

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/chopwella-booth.git
cd chopwella-booth
```

2.  **Install dependencies**
    

```bash
npm install
```

3.  **Run on Android (development)**
    

```bash
npx expo run:android
```

4.  **Generate APK (release)**
    

```bash
cd android
./gradlew assembleRelease
```

APK will be located at:

```swift
android/app/build/outputs/apk/release/app-release.apk
```

---

## 📦 APK Release Info

> The release APK is configured for kiosk use and targets the Vercel-hosted Chopwella frontend. QR scanning and other camera-based features are available immediately upon granting camera permissions.

---

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for details.

---

## 🙌 Credits

-   [React Native](https://reactnative.dev/)
    
-   [Expo](https://expo.dev/)
    
-   [react-native-webview](https://github.com/react-native-webview/react-native-webview)
    
-   [@yudiel/react-qr-scanner](https://www.npmjs.com/package/@yudiel/react-qr-scanner)
    

---

> Built with ❤️ for the Chopwella team — optimized for live booth usage and secure QR-based access control.
