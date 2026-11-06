import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

export default function BmiScreen() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  function calculateBMI() {
    const weightKg = parseFloat(weight);
    const heightM = parseFloat(height) / 100;

    if (weightKg <= 0 || heightM <= 0 ||
        !Number.isFinite(weightKg) || !Number.isFinite(heightM)) {
      setBmi("Please enter valid values");
      return;
    }

    const result = weightKg / (heightM * heightM);
    setBmi(result.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>

      <Text>Weight (kg):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter weight"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <Text>Height (cm):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter height"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <Button title="Calculate BMI" onPress={calculateBMI} />

      {bmi !== null && (
        <Text style={styles.result}>Your BMI: {bmi}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
  },
});