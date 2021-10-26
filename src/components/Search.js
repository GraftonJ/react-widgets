import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SearchItem from './SearchItem'

const Search = () => {
    const [term, setTerm] = useState('Zillow')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])

    // This useEffect exists to prevent dependency array error
    // if only tracking "term" in single useEffect
    // Also prevents duplicate API requests for the same search term
    // (i.e. 'Book' to 'Boo' back to 'Book' before setTimeout expires would not trigger new API call)
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)
        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    // Called on first render and then whenever 'debouncedTerm' is changed
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })
            setResults(data.query.search)
        }
        if(debouncedTerm) {
            search()
        }
    }, [debouncedTerm])

    const renderedResults = results.map(result => {
        return <SearchItem key={result.pageid} result={result} />
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;