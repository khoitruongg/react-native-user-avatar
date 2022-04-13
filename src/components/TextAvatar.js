import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {abbr} from '../helpers';

const TextAvatar = (props) => {
  const {
    name,
    size,
    textColor,
    containerStyle
  } = props;

  const textContainerStyle = {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -(size / 20),
    height: size,
    width: size,
  };

  return (
    <View style={[textContainerStyle, containerStyle]}>
      <Text
        style={{
          color: textColor,
          fontSize: size / 2.5,
        }}
        adjustsFontSizeToFit={true}
      >
        {abbr(name)}
      </Text>
    </View>
  );
};

TextAvatar.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  textColor: PropTypes.string,
  containerStyle: PropTypes.object
};

export default TextAvatar;
