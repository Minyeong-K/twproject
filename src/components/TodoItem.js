import React, {Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
      }
    render() {
        const { text, checked, id, onToggle, onRemove, onDragStart, onDragOver, onDrop} = this.props;

        console.log('todoitem : '+id);

        return (
            <div 
                className="todo-item" 
                draggable="true" // 드래그 가능한 div로 변경
                droppable="true" // 드롭 가능한 div로 변경
                onDragStart={() => onDragStart(id)} // 드래그 스타트 이벤트 추가
                onDragOver={e => e.preventDefault()} // 드래그오버 이벤트를 여기서 막아야 드롭이벤트가 발생함
                onDrop={() => onDrop(id)}  // 드롭 이벤트 추가
                onClick={() => onToggle(id)}
            >
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // 온토글이 실행되지 않도록 함
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked ? ' checked' : ''}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;