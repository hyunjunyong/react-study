import React, { useReducer, useMemo } from 'react'
import UserList from './component/ex/exUserList'
import CreateUser from './component/ex/exCreateUser'
import produce from 'immer'

// 클래스형 컴포넌트 예제 잘 안쓰임 이제
// class Hello extends Component {
//   render() {
//     const { color, name, isSpecial } = this.props;
//     return (
//       <div style={{ color }}>
//         {isSpecial && <b>*</b>}
//         안녕하세요 {name}
//       </div>
//     );
//   }
// }

// Hello.defaultProps = {
//   name: '이름없음'
// };

// 기본 Immer 예제
// const todo = {
//   text: 'Hello',
//   done: false
// };

// const updater = produce(draft => {
//   draft.done = !draft.done;
// });

// const nextTodo = updater(todo);

// console.log(nextTodo);

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...')
  return users.filter((user) => user.active).length
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ],
}

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, (draft) => {
        draft.users.push(action.user)
      })
    case 'TOGGLE_USER':
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id)
        user.active = !user.active
      })
    case 'REMOVE_USER':
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id)
        draft.users.splice(index, 1)
      })
    default:
      return state
  }
}

// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null)

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { users } = state

  const count = useMemo(() => countActiveUsers(users), [users])
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  )
}

export default App