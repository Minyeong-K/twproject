import React, {Component, Fragment} from 'react';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 3 // 이미 0,1,2 가 존재해? 그래서 3?

  // (...);

  handleToggle = (id) => {
    const {todos} = this.state;

    // 파라미터로 받은 아이디를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    console.log('selected : '+selected.id);
    const nextTodos = [...todos]; // 배열을복사
    nextTodos[index] = {
      ...selected,
      // checked: !selected.checked,
      checked: selected.checked ? false : true
    };
    console.log(nextTodos[index]);

    this.setState({
      todos: nextTodos
    });
    // if(selected.checked){
    //   selected.checked = false;
      
    // } else {
    //   selected.checked = true;

    // }
    console.log(nextTodos);
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      // todo의 id랑 같지 않아야 배열에 넣음, 즉 변수로 받은 id값 제외 새로 배열 생성
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개0', checked:false },
      { id: 1, text: ' 리액트 소개1', checked:true },
      { id: 2, text: ' 리액트 소개2', checked:false },
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // 인풋의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋을 비우고
      // concat을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 엔터면 핸들러크리에이트 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleOnDragStart = (id) => {
    console.log('온드래그스타트');
    const {todos} = this.state;

    // 드래그 선택한 객체
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체
    const nextTodos = [...todos]; // 배열을복사

    // 선택한 개체에 moving을 추가하여 setState 함
    nextTodos[index] = {
      ...selected,
      moving: true
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleOnDragOver = (e) => {
    // 이벤트를 div에서 막아서 여기로 오지 않음
    console.log('온드래그오버');
    console.log('e : '+e);
    // e.preventDefault(); 여기서 막으면 오류남
    return false; // 마찬가지로 안먹음
  }

  handleOnDrop = (id) => {
    console.log('온드롭');
    const {todos} = this.state;
    // 드롭될 객체 index
    const index = todos.findIndex(todo => todo.id === id);
    // 기존 선택된 개체 (moving 달린 객체) index
    const index2 = todos.findIndex(todo => todo.moving);
    // 기존 선택된 개체를 복사하여 새로 생성
    const selected = {
      id:todos[index2].id, text:todos[index2].text, checked:todos[index2].checked
    };
  

    // 배열을복사
    const nextTodos = [...todos]; 
    if(index>index2){
      // 아래로 이동시킬 때
      nextTodos.splice(index+1,0,selected)
    } else {
      // 위로 이동시킬 때
      nextTodos.splice(index,0,selected)
    }
    // console.log(nextTodos);
    
    // 기존 선택된 개체(moving이 추가된 개체) 배열에서 삭제
    this.setState({
      todos: nextTodos.filter(todo => todo.moving !== true)
    });
    // nextTodos.array.forEach(element => {
    //   if(element.id===dropped.id){

    //   }
    // });

    // nextTodos[index] = {
    //   ...selected,
    //   moving: true
    // };
    // console.log(nextTodos[index]);

    // this.setState({
    //   todos: nextTodos
    // });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleOnDragStart,
      handleOnDragOver,
      handleOnDrop
    } = this;
    return( 
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onDragStart={handleOnDragStart} onDragOver={handleOnDragOver} onDrop={handleOnDrop} onRemove={handleRemove}/>
      </TodoListTemplate>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
