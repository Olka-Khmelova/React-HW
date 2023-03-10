import React from "react";
const UserCard = ({user, handleShowModal, changeBalanceFormat}) => {
    // const changeBalanceFormat = (num) => {
    //     return num.split(',').join('');
    // }
    return (
        <div className="user-container" onClick={handleShowModal}>
            <img className="user-picture" src={user.picture} alt={user.name} />
            <p><span className="accent-text">Name:</span> {user.name}</p>
            <p><span className="accent-text">Age:</span> {user.age}</p>
            <p><span className="accent-text">Gender:</span> {user.gender}</p>
            <p><span className="accent-text">Balance:</span> {changeBalanceFormat(user.balance)}</p>
        </div>
    )
}

export default UserCard;