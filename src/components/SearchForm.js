import React from 'react'
import { useGlobalContext } from '../context';

function SearchForm() {
    const {setSearchTerm} = useGlobalContext();
    const searchValue = React.useRef("");

    function searchCocktail() {
        setSearchTerm(searchValue.current.value)
    }
  return (
    <section className='section search'>
        <form className='search-form'>
            <div className='form-control'>
                <label htmlFor="name">
                    <input type="text" />
                </label>
            </div>
        </form>
    </section>
  )
}

export default SearchForm;