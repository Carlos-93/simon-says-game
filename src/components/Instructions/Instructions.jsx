export default function Instructions() {
    return (
        <article className="flex bg-white/20 w-fit px-4 py-3 rounded-xl text-sm">
            <div className='flex flex-col items-start gap-1'>
                <p className='text-xl text-white font-semibold mb-3'>Instructions:</p>
                <p className='text-white'>1. The game will start by showing a sequence of formulas and calculations</p>
                <p className='text-white'>2. Repeat the sequence by clicking on the formulas and calculations in the same order</p>
                <p className='text-white'>3. If you click on the wrong item, the game will end</p>
                <p className='text-white'>4. If you repeat the sequence correctly, the game will show a new, longer sequence</p>
            </div>
        </article>
    );
}