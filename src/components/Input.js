import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import { colors } from '../styles/colors'

export const Input = ({ type, ...props }) => (
  <View style={styles.container}>
    {type === 'password' ? (
      <FontAwesomeIcon name="lock" color={colors.navy} size={20} />
    ) : (
      <FontAwesomeIcon name="envelope" color={colors.navy} size={16} />
    )}

    <TextInput
      style={styles.textInput}
      keyboardType={type === 'email' ? 'email-address' : 'default'}
      secureTextEntry={type === 'password'}
      placeholder={type === 'password' ? 'Password' : 'Email'}
      {...props}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.navy,
  },
  textInput: {
    flex: 1,
    marginLeft: 16,
  },
})
