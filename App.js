import React, { useState } from "react";
import { TextInput, Button, StyleSheet, View, Text, Alert, TouchableOpacity } from "react-native";

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState(null);

  const handleSolve = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      Alert.alert("Lỗi", "Vui lòng nhập các số hợp lệ cho a, b và c");
      return;
    }

    if (aNum === 0 && bNum === 0 && cNum === 0) {
      setResult("Phương trình có vô số nghiệm");
      return;
    }

    if (aNum === 0 && bNum === 0 && cNum !== 0) {
      setResult("Phương trình vô nghiệm");
      return;
    }

    if (aNum === 0 && bNum !== 0) {
      const root = -cNum / bNum;
      setResult(`Phương trình có nghiệm bậc nhất: x = ${root}`);
      return;
    }

    const delta = bNum * bNum - 4 * aNum * cNum;

    if (delta < 0) {
      setResult("Phương trình vô nghiệm");
    } else if (delta === 0) {
      const root = -bNum / (2 * aNum);
      setResult(`Phương trình có nghiệm kép: x = ${root}`);
    } else {
      const root1 = (-bNum + Math.sqrt(delta)) / (2 * aNum);
      const root2 = (-bNum - Math.sqrt(delta)) / (2 * aNum);
      setResult(`Phương trình có hai nghiệm phân biệt: x1 = ${root1}, x2 = ${root2}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc 2</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập a"
        value={a}
        onChangeText={setA}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập b"
        value={b}
        onChangeText={setB}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập c"
        value={c}
        onChangeText={setC}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSolve}>
        <Text style={styles.buttonText}>Giải</Text>
      </TouchableOpacity>
      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f7fa",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#00796b",
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#00796b",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#00796b",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#00796b",
    textAlign: "center",
  },
});

