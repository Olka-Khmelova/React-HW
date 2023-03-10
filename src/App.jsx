import React, { useState } from 'react';
import './App.css';
import UserCard from './UserCard';
import {userData} from './userData';
import Header from './Header';
import Modal from './Modal';
const App = () => {
  const [users, setUsers] = useState(userData);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalUser, setModalUser] = useState(null);

  const handleShowModal = (user) => {
    setIsShowModal(true);
    setModalUser(user);
  }
  const handleCloseModal = () => {
    setIsShowModal(false);
    setModalUser(null);
  }

  const changeBalanceFormat = (num) => {
    return num.split(',').join('');
}

  return (
    <div className="wrapper">
      <Header setUsers={setUsers}/>
      {isShowModal ? <Modal handleCloseModal={handleCloseModal} user={modalUser} changeBalanceFormat={changeBalanceFormat}/> : null}
      <div className="container">
        {users.map(user => <UserCard key={user.id} user={user} handleShowModal = {() => handleShowModal(user)} changeBalanceFormat={changeBalanceFormat}/>)}
      </div>
    </div>

  );
}

export default App;
