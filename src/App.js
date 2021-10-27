import React, { useState } from 'react'
import Accordion from './components/Accordion';
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

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },
    {
        label: 'The Color Green',
        value: 'green'
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            {/* <Search /> */}
            <Dropdown
                options={options}
                label="Select a Color"
                selected={selected}
                onSelectedChange={setSelected}
            />
        </div>
    )
}

export default App;