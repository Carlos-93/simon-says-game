import { useState, useEffect, useCallback } from 'react';
import Title from '../Title/Title';
import Instructions from '../Instructions/Instructions';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import processGameResult from '../../services/api';

export default function SimonScience() {
    // State variables for the game 
    const [sequence, setSequence] = useState([]);
    const [userSequence, setUserSequence] = useState([]);
    const [activeSegment, setActiveSegment] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [time, setTime] = useState(0);
    const [score, setScore] = useState(0);

    // Get the user_id from the URL
    const params = new URLSearchParams(window.location.search);
    const user_id = params.get('user_id');
    const game_id = 3;

    // Functions
    const generateSequence = () => {
        // Agregar nuevo elemento a la secuencia
    }
    const playSequence = () => {
        // Lógica para iluminar segmentos secuencialmente
    }
    const handleSegmentClick = (index) => {
        // Lógica para manejar clic en segmento
    }
    const checkSequence = () => {
        // Verificar secuencia del usuario
    }

    const closeModalAndRedirect = () => {
        setModalOpen(false);
        window.location.href = 'http://127.0.0.1:8000/games';
    }

    // Callbacks
    const handleGameResult = useCallback(async (finalScore) => {
        await processGameResult(finalScore, user_id, game_id, time);
        setModalOpen(true);
    }, [user_id, game_id, time]);

    useEffect(() => {
        // Inicializar juego
        generateSequence();
    }, []);

    return (
        <main className="flex flex-col w-[80rem] backdrop-blur-2xl rounded-3xl border border-yellow-400 mx-6 p-5">
            {/* Instructions and Title components */}
            <header className='flex items-center justify-between'>
                <Instructions />
                <Title />
            </header>
            {/* Score */}
            <div className="flex absolute bottom-0 right-0 bg-white/20 w-fit px-5 py-2.5 m-6 rounded-xl text-white text-lg">
                <p className='font-medium'>Score:</p>
                <p className='font-medium text-yellow-400 w-10 text-end'>{score}</p>
            </div>
            {/* Modal component */}
            {modalOpen && <Modal message={modalMessage} score={score} onClose={closeModalAndRedirect} />}
        </main>
    );
}