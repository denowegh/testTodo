import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

import config from '../config';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/TodoRowItemStyles';

export default class TodoRowItem extends Component {

  render() {
    const {todo, time} = this.props;
    const {text} = todo;

    return (
      <View style={styles.row} key={todo.id}>
        <View style={styles.timeline}>
          <View style={styles.timelineVerticalLink} />
          <Icon
             style={styles.icon}
             name={"circle"}
             size={6}
           />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  };
};
