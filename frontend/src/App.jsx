import React, { useState } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import './styles.css';


function App() {
    const [refresh, setRefresh] = useState(false);

    // Функция для обновления списка комментариев после добавления нового
    const handleCommentAdded = () => {
        setRefresh(!refresh);
    };

    return (
        <div>
            <div className="container">
                <h1>Васильев Михаил</h1>
                <img src="photo.png" alt="Ваше имя" className="profile-pic"/>
                <a href="https://github.com/Webring" target="_blank" rel="noopener noreferrer">Мой
                    GitHub</a>
                <p>Привет! Я python разработчик.</p>
                <p> Владею python(django, pyqt), js(react), c++(qt), html, linux, git,
                    docker и docker-compose.</p>


                <CommentList refresh={refresh}/>
                <CommentForm onCommentAdded={handleCommentAdded}/>

            </div>
        </div>
    );
}

export default App;