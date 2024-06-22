# Домашняя работа: Роутинг и управление стейтом с React

#### 1. Установить react-router;
Установил:
```ts
npm install react-router-dom  
```

#### 2. Добавить отдельные компоненты страниц - Login / Register / HomePage / 404;
Добавил страницы и BrowserRouter:
```ts
function App() {
  return (
    <BrowserRouter>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <nav>
          <li>
            <Link to={'/Login'}> Логин</Link>
          </li>
          <li>
            <Link to={'/Register'}> Регистрация</Link>
          </li>
          <li>
            <Link to={'/Home'}> На главную</Link>
          </li>
          <li>
            <Link to={'/NotFound'}> Не найдено</Link>
          </li>    
          <li>
            <Link to={'/Person'}> Тест редакса</Link>
          </li>
      
        </nav>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/NotFound" element={<NotFound />}></Route> 
        <Route path="/Person" element={<PersonMain />}></Route> 
      </Routes>
    </BrowserRouter>
  );
}
```

#### 3. Добавить стейт-менеджемент с Redux;

Добавил редюсер:

```ts
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
```
Зарегистрировал редюсер:
```ts
const store = configureStore({
    reducer: {
        // Регистрируем редюсер     
        person: personReducer,
    },

});
export default store;
```

#### 4. В React проект добавлена библиотека UI компонентов (Bootstrap / material design);

Добавил:
```ts
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
```

