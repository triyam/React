import {createStore, combineReducers } from 'redux';
import { Dishes } from '../redux/dishes';
import { Comments } from '../redux/comments';
import { Promotions } from '../redux/promotions';
import { Leaders } from '../redux/leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}