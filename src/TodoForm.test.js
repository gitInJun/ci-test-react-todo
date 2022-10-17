import React from 'react';
import { fireEvent, getByPlaceholderText, render } from '@testing-library/react';
import TodoForm from './TodoForm.js';

describe('TodoForm', () => {
    const setup = (props = {}) => {
        const utils = render(<TodoForm {...props} />);
        const { getByText, getByPlaceholderText } = utils;
        const input = getByPlaceholderText("할 일을 입력하세요");
        const button = getByText('등록');
        return {
            ...utils,
            input,
            button,
        }
    };

    it('has input and button', () => {
        // const { getByText, getByPlaceholderText } = render(<TodoForm />);
        // getByPlaceholderText("할 일을 입력하세요"); // input 확인
        // getByText('등록'); // button 확인
        const {input, button} = setup();
        expect(input).toBeTruthy();
        expect(button).toBeTruthy();
    });
    it('changes input', () => {
        const {input} = setup();
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기',
            },
        }),
        expect(input).toHaveAttribute('value', 'TDD 배우기');
    });
    it('calls onIsert and clears input', () => {
        const onInsert = jest.fn();
        const { input, button } = setup({ onInsert });
        // change 이벤트 발생시키기
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기',
            },
        });
        // 버튼 클릭시키기
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD 배우기');
        expect(input).toHaveAttribute('value', '');
    });
});