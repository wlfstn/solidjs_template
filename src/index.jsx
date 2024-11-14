import { render } from 'solid-js/web';

import './styles/utils/root.scss';
import App from './app';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found.',
  );
}

render(() => <App />, root);