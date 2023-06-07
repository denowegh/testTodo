import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import SwipeView from 'react-native-swipeview';


import Title from '../components/Title';
import TodoRowItem from '../components/TodoRowItem';

import commonStyles from './styles';
import { selectTodoState, deleteCompletedTodo } from "../store/todo";

const CompletedTodosScreen = () => {
    const dispatch = useDispatch();
    const { completed: { todos = [] } } = useSelector(selectTodoState);

    this.rightOpenValue = -Dimensions.get('window').width;

    return (
      <View style={commonStyles.container}>
        <Title title={"Completed Todos!"}/>
        <FlatList
          data={todos}
          keyExtractor={todo => todo.id}
          extraData={this.props}
          enableEmptySections={true}
          ItemSeparatorComponent={() => <View style={commonStyles.separator} />}
          renderItem={({item, index}) => (
            <SwipeView
              renderVisibleContent={() => (
                <TodoRowItem
                  todo={{...item}}
                  index={index}
                  time={moment().endOf('hour').fromNow()}
                />
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
              rightOpenValue={this.rightOpenValue}
              swipeDuration={200}
              swipeToOpenPercent={40}
              disableSwipeToRight={true}
              onSwipedLeft={() => dispatch(deleteCompletedTodo(index))}
            />
          )}
         />
      </View>
    );
  };
export default CompletedTodosScreen;
