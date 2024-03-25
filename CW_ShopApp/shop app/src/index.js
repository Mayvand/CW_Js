import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import '../style/main.scss';

const root = document.getElementById('root');

const header = new Header().render();
const main = new Main().render();
const footer = new Footer().render();

root.append(header, main, footer);

// console.log('dev server');
