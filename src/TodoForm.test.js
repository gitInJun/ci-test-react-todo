import React from 'react';
import { fireEvent, getByPlaceholderText, render } from '@testing-library/react';
import TodoForm from './TodoForm.js';

describe('TodoForm', () => {
    it('has input and button', () => {
        const { getByText, getByPlaceholderText } = render(<TodoForm />);
        getByPlaceholderText("할 일을 입력하세요"); // input 확인
        getByText('등록'); // button 확인
    });
    it('changes input', () => {
        const { getByPlaceholderText } = render(<TodoForm />);
        const input = getByPlaceholderText("할 일을 입력하세요");
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기',
            },
        }),
        expect(input).toHaveAttribute('value', 'TDD 배우기');
    });
    it('calls onIsert and clears input', () => {
        const onInsert = jest.fn();
        const { getByText, getByPlaceholderText } = render(<TodoForm onInsert={onInsert} />);
        const input = getByPlaceholderText('할 일을 입력하세요');
        const button = getByText('등록');
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