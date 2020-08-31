import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../styles/styles';

export default function PageTwo({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Screen Two</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={styles.buttonPrimary}
        >
          <Text style={styles.text}>Go back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
