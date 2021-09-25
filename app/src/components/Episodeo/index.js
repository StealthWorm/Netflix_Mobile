import React, { useState } from 'react';

import { ScrollView, FlatList, TouchableOpacity, Image, ImageBackground, View } from 'react-native';
import { Title, Button, Paragraph, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const Episodeo = ({ episodeo }) => {
   const [tipo] = useState('serie');

   return (
      <TouchableOpacity style={styles.container}>
         <View style={styles.row}>
            <Image style={styles.capa} source={{ uri: episodeo.capa }} />
            <View>
               <Title style={styles.titulo}>{episodeo.numero}. {episodeo.titulo}</Title>
               <Caption>45 mins.</Caption>
            </View>
         </View>
         <Caption>{episodeo.descricao}</Caption>
      </TouchableOpacity>
   )
}

export default Episodeo;