import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
        search()
    }, [debouncedTerm])

    const renderedResults = results.map(result => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {/* Using dangerously set as example */}
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}} />
                </div>
            </div>
        )
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