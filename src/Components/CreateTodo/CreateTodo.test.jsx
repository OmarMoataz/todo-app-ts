import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';

import CreateTodo from "./CreateTodo";

describe('input box', () => {
  it ('input should be empty on first load', () => {
    render(<CreateTodo onCreate={() => {}}/>);


    const createTodoInput = screen.getByTestId('create-todo-input')
    expect(createTodoInput).toHaveTextContent('');
  })
});
