import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Home = () => {
    return (
        <div className='mx-auto pb-5'>
            <AddTodo />
            <TodoList/>
        </div>
    );
};

export default Home;