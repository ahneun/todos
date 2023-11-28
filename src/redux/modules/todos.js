import { v4 as uuidv4 } from 'uuid';


const ADD_TODO = "ADD_TODO";
const DELETE_TODO ="DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";


export const addTodo = (payload) => {
  return { type: ADD_TODO, payload};
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload};
};

export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload};
};


const initialState = [
  {
    id: uuidv4(),
    title: "고양이",
    body: "밥주기, 맛동산치우기",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "청소",
    body: "방청소, 화장실청소",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "공부",
    body: "코딩타파!!!",
    isDone: false,
  },
];


// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]; //TODO: 여기 작성
      
    case DELETE_TODO:
      return state.filter((item)=>item.id !== action.payload); //TODO: 여기 작성
      
    case SWITCH_TODO:
      state.map((item) => {
        if (item.id===action.payload) {
          return {...item, isDone: !item.isDone};
        } else {
          return item;
        }
        
      });
      break;
      
      default:
        return state;
    }
  };
  

export default todos;