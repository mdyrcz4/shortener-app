import ShortenerForm from './components/ShortenForm/ShortenerForm';
import LinksList from './components/LinksList/LinksList';
import { useState } from 'react';
import ListItem from './components/ListItem/ListItem';

function App() {
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const addNewUrl = (url) => {
    const item = new ListItem({ url: `${process.env.REACT_APP_API_URL}/${url.data}` });
    setShortenedUrls([item, ...shortenedUrls]);
  }

  return (
    <div>
      <header>
        <div>
          Shortener App
        </div>
      </header>
      <main>
        <div>
          <ShortenerForm
            handleShortenUrl={addNewUrl}
          />
          <LinksList
            items={shortenedUrls}
          />
        </div>
      </main>
      <footer style={{ textAlign: 'center' }}>
        Copyright &copy; {new Date().getFullYear()} mdyrcz4 | All Rights Reserved</footer>
    </div>
  );
}

export default App;
