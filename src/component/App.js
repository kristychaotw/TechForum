import React from 'react'
import QuestionListing from './QuestionListing'
import SearchingBar from './searchingBar'
import TrendingTags from './TrendingTags'

export default function App() {
    return (
        <div>
            <SearchingBar />
            <TrendingTags />
            <QuestionListing />
        </div>
    )
}
