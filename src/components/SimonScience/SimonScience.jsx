import { useState, useEffect } from 'react';
import Title from '../Title/Title';
import Instructions from '../Instructions/Instructions';

export default function SimonScience() {
    const [sequence, setSequence] = useState([]);
    const [userSequence, setUserSequence] = useState([]);
    const [activeSegment, setActiveSegment] = useState(null);
    useEffect(() => {
        // Inicializar juego
        generateSequence();
    }, []);
    const generateSequence = () => {
        // Agregar nuevo elemento a la secuencia
    };
    const playSequence = () => {
        // Lógica para iluminar segmentos secuencialmente
    };
    const handleSegmentClick = (index) => {
        // Lógica para manejar clic en segmento
    };
    const checkSequence = () => {
        // Verificar secuencia del usuario
    };
    return (
        <main className="flex flex-col w-[80rem] backdrop-blur-2xl rounded-3xl border border-yellow-400 mx-6 p-5">
            {/* Instructions and Title components */}
            <header className='flex items-center justify-between'>
                <Instructions />
                <Title />
            </header>
        </main>
    );
}