import React from 'react';
import { FlatList, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';
import SwipeView from 'react-native-swipeview';


import Title from '../components/Title';
import Input from '../components/Input';
import TodoRowItem from '../components/TodoRowItem';
import DateView from '../components/DateView';

import styles from './styles/ActiveTodosStyles';
import commonStyles from './styles';

import {
    selectTodoState,
    addTodo,
    completeTodo,
    deleteActiveTodo
} from "../store/todo";


const ActiveTodosScreen = () => {
    const dispatch = useDispatch();
    const { active: { todos = [] } } = useSelector(selectTodoState);
    this.leftOpenValue = Dimensions.get('window').width;
    this.rightOpenValue = -Dimensions.get('window').width;

    return (
      <View style={commonStyles.container} >
        { <Title title={"My Todo List!"}/> }
        <View style={styles.header}>
          <View style={styles.inputContainer}>
            <Input
              placeholder={"Type a todo, then hit enter!"}
              maxLength={25}
              clearTextOnFocus={true}
              onSubmitEditing={addTodo}
            />
          </View>
          <DateView />
        </View>
        <FlatList
          data={todos}
          keyExtractor={todo => todo.id}
          enableEmptySections={true}
          ItemSeparatorComponent={() => <View style={commonStyles.separator} />}
          renderItem={({item, index}) => (
            <SwipeView
              renderVisibleContent={() => (
                <TodoRowItem
                  todo={{...item}}
                  index={index}
                  time={moment().startOf('hour').fromNow()}
                />
              )}
              renderLeftView={() => (
                <View style={commonStyles.rowLeft}>
                  <Icon
                     style={commonStyles.icon}
                     name={"check"}
                     size={20}
                   />
                </View>
        			)}
              renderRightView={() => (
                <View style={commonStyles.rowRight}>
                   <Icon
                      style={commonStyles.icon}
                      name={"times"}
                      size={20}
                    />
                </View>
        			)}
              leftOpenValue={this.leftOpenValue}
              rightOpenValue={this.rightOpenValue}
              swipeDuration={200}
              swipeToOpenPercent={40}
              onSwipedLeft={() => dispatch(deleteActiveTodo(index))}
              onSwipedRight={() => {
                dispatch(completeTodo(index));
                dispatch(deleteActiveTodo(index));
              }}
            />
          )}
         />
      </View>
    );
  };

export default ActiveTodosScreen;
