import './App.css';
import BookTemplate from './components/BookTemplate';
import Header from './components/Header';
import BookList from './components/BookList'
import BookCreate from './components/BookCreate'
import { BookProvider } from './BookContext';

function App() {
  return (
    <BookProvider>
    <BookTemplate>
      <Header/>
      <BookList/>
      <BookCreate/>
    </BookTemplate>
    </BookProvider>
  );
}

export default App;