import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

import { colors } from '../styles/colors'

export const Button = ({ label, ...props }) => (
  <TouchableOpacity
    {...props}
    style={[
      styles.container,
      { backgroundColor: props.disabled ? colors.grey : colors.navy },
    ]}
  >
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    padding: 16,
    borderRadius: 8,
  },
  label: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
})
