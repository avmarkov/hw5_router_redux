import { Person } from "../models/person"

interface State {
    list: Person[]
}

export const PersonActions = {
    personCheck: 'PERSON_CHECK',
}

// исходный стейт
const initialState: State = {
    list: [],
}

type Action = { type: string, payload?: any }

// редюсер - функция, на основе входного объекта меняющая стейт и возвращающая новый
const personReducer = (state = initialState, action: Action) => {
    console.log('person', state);
    switch (action.type) {
        case 'PERSON_CHECK':
            const list = [...state.list];

            const item = action.payload;
            const index = list.findIndex(x => x.username === item.username);
            if (index === -1) {
                list.push(item);
            } else {
                list.splice(index, 1);
            }
            const newState = { ...state, list: [...list] };
            return newState;
        case '[PERSON_STATE] PERSON_CLEAR':
            return { ...state, list: [] };
        default:
            return state;
    }
}

export default personReducer;
