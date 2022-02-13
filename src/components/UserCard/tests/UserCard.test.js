import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCard from '../UserCard';
import { BrowserRouter } from 'react-router-dom'

it('renders UserCard with id and name', () => {
    const userInfo = {
        id: 234,
        name: 'Alex'
    }
    render(
        <BrowserRouter>
            <UserCard userInfo={userInfo}/>
        </BrowserRouter>
    );
    expect(screen.getByText('Alex')).toBeInTheDocument();
});