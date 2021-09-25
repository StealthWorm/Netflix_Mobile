import React, { useState, useCallback } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import api from '../../services/api';

import styles from './styles';

const Login = ({ navigation }) => {
   // 0 - carregando, 1 - logado, 2 - deslogado
   const [logged, setLogged] = useState(0);
   const [credenciais, setCredenciais] = useState({
      email: '',
      senha: '',
   });

   const checkLogin = async () => {
      const user = await AsyncStorage.getItem('@user');
      if (user) {
         setLogged(1);
         navigation.navigate('Home');
      } else {
         setLogged(2);
      }
   };

   const login = async () => {
      try {
         const response = await api.post('/usuario/login', credenciais);
         const res = response.data;

         if (res.error) {
            alert(res.message);
            return false;
         }

         await AsyncStorage.setItem('@user', JSON.stringify(res.usuario));
         setLogged(1);
         // navigation.navigate('Home');

         // o replace substitui a pagina anterior, entao s evoce der comando de voltar ele fecha o app
         navigation.replace('Home');
      } catch (err) {
         alert(err.message);
      }
   };

   //toda vez que carregar o componente
   useFocusEffect(
      useCallback(() => {
         checkLogin();
      }, []),
   );

   return (
      <View style={styles.bgDark}>
         <Image style={styles.logo} source={require('../../assets/netflix-logo-5.png')} />

         {logged === 0 && <ActivityIndicator color="#E50914" size="large" />}

         {logged === 2 && (
            <View>
               <TextInput
                  mode="flat"
                  style={styles.marginBottom}
                  label="Email ou número de telefone"
                  onChangeText={(email) => {
                     setCredenciais({
                        ...credenciais,
                        email,
                     });
                  }}
                  value={credenciais.email}
               />
               <TextInput
                  mode="flat"
                  style={styles.marginBottom}
                  secureTextEntry
                  label="Senha"
                  onChangeText={(senha) => {
                     setCredenciais({
                        ...credenciais,
                        senha,
                     });
                  }}
                  value={credenciais.senha}
               />

               <Button
                  style={styles.marginBottom}
                  mode="contained"
                  onPress={() => {
                     login();
                  }}>
                  Entrar
               </Button>

               <Button theme={{ colors: { primary: '#fff' } }} onPress={() => { }}>
                  Recuperar Senha
               </Button>

               <Text style={styles.textSmall}>
                  O acesso está protegido pelo Google reCAPTCHA para garantir que você
                  não é um robo. Saiba mais.
               </Text>
            </View>
         )}

      </View>
   );
};

export default Login;