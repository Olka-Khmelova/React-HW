import React, { useState, useEffect } from "react";
import { userData } from "./userData";

const Header = ({setUsers}) => {
    const [filter, setFilter] = useState({
        name: "",
        sort: "default",
    })

    useEffect(() => {
        const nameLowerCase = filter.name.toLowerCase();
        const sortValue = filter.sort;
        let newUsers = userData
        if (sortValue === "asc") {
            newUsers = userData
            .filter(user => user.name.toLowerCase().includes(nameLowerCase))
            .sort((a, b) => a.age - b.age);
        }
        if (sortValue === "desc") {
            newUsers = userData
            .filter(user => user.name.toLowerCase().includes(nameLowerCase))
            .sort((a, b) => b.age - a.age);
        }
        if (sortValue === "default") {
            newUsers = userData
            .filter(user => user.name.toLowerCase().includes(nameLowerCase))
        }
        setUsers(newUsers);
    }, [filter, setUsers]);

    const handleSortChange = (e) => {
        const { value } = e.target;
        setFilter({...filter, sort: value});
    }

    const handleInputChange = (e) => {
        const { value } = e.target;
        setFilter({...filter, name: value});
    }

    const handleResetFilters = (e) => {
        setFilter({
            name: "",
            sort: "default"
        });
    }

    return (
        <header>
            <form className="form">
                <input  value={filter.name} onChange={handleInputChange} className="input-name" type="text" placeholder="Enter name"/>
                <select onChange={handleSortChange} value={filter.sort} >
                    <option value="default">Default</option>
                    <option value="asc">Ascading by age</option>
                    <option value="desc">Descending by age</option>
                </select>
                <button className="reset-btn" type="button" onClick={handleResetFilters}>Reset filters</button>
            </form>
            
        </header>

    )
}
export default Header;