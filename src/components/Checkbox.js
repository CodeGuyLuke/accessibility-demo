import React, { useEffect } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Text,
} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import { colors } from '../styles/colors'

const LAYOUT_ANIMATION_CONFIG = {
  duration: 200,
  update: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
}

export const Checkbox = ({ checked, onPress, label }) => {
  useEffect(() => {
    LayoutAnimation.configureNext(LAYOUT_ANIMATION_CONFIG)
  }, [checked])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <FontAwesomeIcon
          name={checked ? 'check-square-o' : 'square-o'}
          size={checked ? 24 : 24}
          color={checked ? colors.green : colors.grey}
        />
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  button: {
    padding: 12,
    paddingLeft: 15,
  },
  label: {
    flex: 1,
    marginLeft: 2,
  },
})
