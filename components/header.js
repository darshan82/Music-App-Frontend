import React from 'react';
import { Text, View } from 'react-native';

const Header = props => {
  const { textStyle, viewStyle } = styles;
  const { headerText } = props;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    height: 60,
    paddingTop: 10,
    paddingLeft: '40%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    alignItem: 'center',
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',

    alignContent: 'center',
    backgroundColor: '#F8F8F8',
  },
};

export default Header;
