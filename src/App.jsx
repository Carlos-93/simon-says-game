import { Route, Routes } from 'react-router-dom'
import Logo from './components/Logo/Logo';
import SimonScience from './components/SimonScience/SimonScience';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={
        <main className='h-screen grid place-items-center'>
          <Logo />
          <SimonScience />
        </main>
      } />
    </Routes>
  );
}