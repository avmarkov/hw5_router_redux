import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./stateManagment/personReducer";

const store = configureStore({
    reducer: {
        // Регистрируем редюсер     
        person: personReducer,
    },

});
export default store;
