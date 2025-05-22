import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <WebView
        source={{ uri: "https://chopwella-base.vercel.app/" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        originWhitelist={["*"]}
        useWebKit={true}
        allowsInlineMediaPlayback={true}
        allowsProtectedMedia={true}
        onPermissionRequest={(event: any) => {
          // only works in custom native modules, not Expo Managed
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
