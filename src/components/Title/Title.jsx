export default function Title() {
    return (
        <article className="flex items-center gap-3 sm:gap-5">
            <img src="src/assets/simon.png" className="w-8 sm:w-10 lg:w-12 xl:w-28" alt="Image Hangman" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-white font-sans">Simon Says Game</h1>
        </article>
    );
}