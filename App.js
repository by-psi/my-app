import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';

export default function App() {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["30%", "70%"], []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <Text style={styles.title}>Sujeito Programador!</Text>
        <Text style={styles.subtitle}>Action Buttom Sheet</Text> */}
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: "#FFF"}}
        >
          <View style={styles.contentBox}>
            <Text>Conteúdo do Action Bottom Sheet</Text>
            <Button title="Fehar" onPress={()=>{}}/>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  contentBox:{
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "#FF9900", 
    fontWeight: "normal",
    fontSize: 18,
    marginTop:40
  },
  subtitle: {
    color: "#FFF", 
    fontWeight: "normal",
    fontSize: 12,
  }
});
