import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import './search.css'

const Search = ({ setSearch, search }) => {


    return (
        <Form.Control
            type="email"
            placeholder="Buscar post"
            className="search rounded-3 border-0 overflow-hidden w-100"
            onChange={(e) => { setSearch(e.target.value) }}
            value={search}
        />
    )
}

export default Search