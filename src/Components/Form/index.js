import React from 'react';
import Spinner from '../Spinner';

const Form = ({user, loading, error, buttonAction, changeUser, buttonAction2}) => (
    <div className="formContainer">
        <input 
            type="text"
            className="userInput"
            value={user}
            placeholder="Usuário ou Organização"
            onChange={e => changeUser(e.target.value)}
        ></input>
        <button className="searchButton" onClick={buttonAction}>
            {loading ? <Spinner /> : "Buscar"}
        </button>

        <button className="cleanButton" onClick={buttonAction2}>Limpar</button>

        <p className="errorText">{error}</p>
    </div>
)

export default Form;