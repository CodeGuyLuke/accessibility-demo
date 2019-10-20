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

export const Checkbox = ({
  checked,
  onPress,
  label,
  accessibilityLabel,
  accessibilityButtonHint,
  accessibilityLabelHint,
}) => {
  useEffect(() => {
    LayoutAnimation.configureNext(LAYOUT_ANIMATION_CONFIG)
  }, [checked])

  accessibilityStates = checked ? ['checked'] : ['unchecked']

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}
        accessibilityLabel={`${accessibilityLabel}Checkbox`}
        accessibilityHint={accessibilityButtonHint}
        accessibilityStates={accessibilityStates}
      >
        <FontAwesomeIcon
          name={checked ? 'check-square-o' : 'square-o'}
          size={checked ? 24 : 24}
          color={checked ? colors.green : colors.grey}
        />
      </TouchableOpacity>
      <View accessibilityElementsHidden={true} style={styles.label}>
        <Text>{label}</Text>
      </View>
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
    justifyContent: 'center',
  },
})
