import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove, onDragStart, onDragOver, onDrop } = this.props;

        // const todoList = todos.map(
        //     ({id, text, checked}) => (
        //         <TodoItem
        //             id={id}
        //             text={text}
        //             checked={checked}
        //             onToggle={onToggle}
        //             onRemove={onRemove}
        //             key={id}
        //         />
        //     )
        // );

        const todoList = todos.map(
            (todo) => (
                <TodoItem
                    {...todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    key={todo.id}
                />
            )
        )

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;