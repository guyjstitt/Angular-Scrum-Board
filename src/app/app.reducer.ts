import { Reducer, combineReducers } from 'redux';

import { ColumnsState, ColumnReducer } from './column/column.reducer';
export * from './column/column.reducer';

export interface AppState {
    columns: ColumnsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    columns: ColumnReducer
});

export default rootReducer;