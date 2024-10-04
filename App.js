import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const PreferencesScreen = () => {
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [nightMode, setNightMode] = useState(false);

  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setNightMode(false);
  };

  
  const currentTheme = nightMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, currentTheme.container]}>
      <Text style={[styles.title, { fontSize }, currentTheme.text]}>Configurações de Preferências</Text>


      <View style={[styles.preferenceSection, currentTheme.section]}>
        <Text style={[styles.label, currentTheme.text]}>Tema:</Text>
        <View style={[styles.pickerContainer, currentTheme.pickerContainer]}>
          <Picker
            selectedValue={theme}
            onValueChange={(itemValue) => setTheme(itemValue)}
            style={[styles.picker, currentTheme.picker]}
          >
            <Picker.Item label="Claro" value="Claro" />
            <Picker.Item label="Escuro" value="Escuro" />
            <Picker.Item label="Automático" value="Automático" />
          </Picker>
        </View>
      </View>


      <View style={[styles.preferenceSection, currentTheme.section]}>
        <Text style={[styles.label, currentTheme.text]}>
          Tamanho da Fonte: <Text style={styles.fontSizeLabel}>{fontSize}</Text>
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={12}
          maximumValue={30}
          step={1}
          value={fontSize}
          onValueChange={(value) => setFontSize(value)}
          minimumTrackTintColor="#6200ea"
          thumbTintColor="#6200ea"
        />
      </View>


      <View style={[styles.preferenceSection, currentTheme.section]}>
        <Text style={[styles.label, currentTheme.text]}>Modo Noturno:</Text>
        <Switch
          value={nightMode}
          onValueChange={(value) => setNightMode(value)}
          trackColor={{ false: "#767577", true: "#6200ea" }}
          thumbColor={nightMode ? "#fff" : "#f4f3f4"}
        />
        <Text style={[styles.switchLabel, currentTheme.text]}>{nightMode ? 'Ativado' : 'Desativado'}</Text>
      </View>


      <View style={styles.resetButtonContainer}>
        <Button title="Resetar Preferências" color="#6200ea" onPress={resetPreferences} />
      </View>
    </View>
  );
};

const lightTheme = {
  container: {
    backgroundColor: '#f0f0f0',
  },
  text: {
    color: '#333',
  },
  section: {
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderColor: '#ddd',
  },
  picker: {
    color: '#333',
  },
};

const darkTheme = {
  container: {
    backgroundColor: '#121212',
  },
  text: {
    color: '#fff',
  },
  section: {
    backgroundColor: '#1e1e1e',
  },
  pickerContainer: {
    borderColor: '#444',
  },
  picker: {
    color: '#fff',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  preferenceSection: {
    marginBottom: 25,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  fontSizeLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200ea',
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  switchLabel: {
    fontSize: 16,
    marginTop: 10,
  },
  resetButtonContainer: {
    marginTop: 30,
    paddingHorizontal: 40,
  },
});
