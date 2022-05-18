import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Home = () => {
    return (
        <div className='mx-auto pb-5'>
            <h1 className="text-center">Wellcome To To-DO App</h1>
            <AddTodo />
            <TodoList/>
        </div>
    );
};

export default Home;