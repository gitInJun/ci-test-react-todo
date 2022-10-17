import React from 'react';
import { fireEvent, getByPlaceholderText, render } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('<TodoForm />', () => {
    const sampleTodo = {
        id: 1,
        text: 'TDD 배우기',
        done: false,
    };
    const setup = (props = {}) => {
        const utils = render(<TodoItem todo={sampleTodo} {...props} />);
        const { getByText } = utils;
        const todo = sampleTodo;
        const span = getByText(todo.text);
        const button = getByText('삭제');
        return {
            ...utils,
            span,
            button,
        };
    };
    it('has span and button', () => {
        const {span, button} = setup();
        expect(span).toBeTruthy();
        expect(button).toBeTruthy();
    });
});