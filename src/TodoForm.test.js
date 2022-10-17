import React from 'react';
import { getByPlaceholderText, render } from '@testing-library/react';
import TodoForm from './TodoForm.js';

describe('TodoForm', () => {
    it('has input and button', () => {
        const { getByText, getByPlaceholderText } = render(<TodoForm />);
        getByPlaceholderText("할 일을 입력하세요"); // input 확인
        getByText('등록'); // button 확인
    });
});
