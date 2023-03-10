import React from "react";

const Modal = ({user, handleCloseModal}) => {

    let fullUserInfo = Object.entries(user).map(user => {
        if (typeof user[1] !== 'object' && user[0] !== '_id' && user[0] !== 'picture' && typeof user[1] !== 'boolean') {
            return <li className="user-info" key={user}>
                <span className="accent-text list-text">{user[0]}</span> :  {user[1]} ;</li>;
        }    
        return null;
    });

    return (
        <div className="modal-back" onClick = {handleCloseModal}>
            <div className="user-container modal">
                <ul className="list-info">
                    {fullUserInfo}
                </ul>
            </div>
        </div>
    )
}

export default Modal;