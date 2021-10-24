import React from 'react'

const SearchItem = ({ result }) => {
    return (
        <div className="item">
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
}

export default SearchItem