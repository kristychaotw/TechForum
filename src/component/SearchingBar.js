import React from 'react'
import { SearchingBarWrapper } from './style/component.css'

export default function SearchingBar() {
 
    return (
        <SearchingBarWrapper>
            <input type="text" placeholder='Tag'/>
            <input type="submit" value='Search'/>
        </SearchingBarWrapper>
    )
}
