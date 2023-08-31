import React, {useState} from 'react'
import './App.css';

const App = () => {
  const [users, setUsers] = useState([
      {id: 1, desc: "react 어려ㅜ어요..."},
      {id: 2, desc: "ㅜㅜㅜㅜㅜ너무"}
  ]);

  const [desc, setDesc] = useState('');

  const nameChangeHandler = (event) => {
    setDesc(event.target.value)
  };

  // 추가 버튼
  const clickAddButtonHandler = (event) => {
    const newUser = {
      id: users.length + 1,
      desc
    }
    setUsers([...users, newUser]);
  }


  return (
    <div className='mainBox'>
      <div>
        <input value={desc} onChange={nameChangeHandler}/>
        <button onClick={clickAddButtonHandler}>추가하기</button>
        <h2>Todo List</h2>
      </div>
      <div className='app-style'>
        {users.map(function (item) {
          return (
            <div key={item.id} className='component-style'>
              {item.desc}
            </div>
          );
        })
        }
      </div>
    </div>
  );
};



export default App;
