import { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text, Snackbar } from 'react-native-paper';
import axios, { AxiosError } from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [value, setValue] = useState('');
  const [inputError, setInputError] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<any>();

  const handleSearch = async () => {
    if (!value.trim()) {
      setInputError(true);
      return;
    }

    setLoading(true)

    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/api/pokemons/${value}`);
      const { data } = response.data;
      const abilities: string[] = data;

      navigation.navigate('Details', { name: value, abilities });
    } catch (error) {
      const axiosError = error as AxiosError;
      setError((axiosError.response?.data as any).error || 'Not found');
    } finally {
      setLoading(false);
      setInputError(false);
      setValue('');
    }
  };

  return (
    <>
      <View style={{ flex: 1, padding: 16, justifyContent: 'center' }}>
        <Text variant="headlineMedium" style={{ marginBottom: 20 }}>Buscar Pokémon</Text>
        <TextInput
          label="Digite o nome"
          mode="outlined"
          value={value}
          disabled={loading}
          onChangeText={setValue}
        />

        {inputError && (
          <Text style={{ color: '#ff0000', marginTop: 8 }}>
            O campo não pode estar vazio
          </Text>
        )}

        <Button
          mode="contained"
          onPress={handleSearch}
          disabled={loading}
          style={{ marginTop: 16 }}
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </Button>
      </View>

      {!!error && (
        <Snackbar
          visible
          onDismiss={() => setError('')}
          duration={3000}
        >
          {error}
        </Snackbar>
      )}
    </>
  )
};
