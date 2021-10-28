import React, { useState } from 'react'
import Accordion from './components/Accordion';
import Translate from './components/Translate'
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Route from './components/Route'
import Header from './components/Header';
import Link from './components/Link'

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
    },
]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Header />
           <Route path ="/">
               <Accordion items={items} />
           </Route>
           <Route path="/list">
               <Search /> 
           </Route>
           <Route path="/dropdown">
               <Dropdown 
                    label='Select a Color'
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
               /> 
           </Route>
           <Route path="/translate">
               <Translate /> 
           </Route>
        </div>
    )
}

export default App;