import React, { useState } from 'react'
import Accordion from './components/Accordion';
import Translate from './components/Translate'
import Dropdown from './components/Dropdown';
import Search from './components/Search';

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend javascript framework'
    },
    {
        title: 'Why React?',
        content: 'React is a favorite framework'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const App = () => {
    
    return (
        <div>
            <Translate />
        </div>
    )
}

export default App;