import { initControllers } from './controller';
import { updateInfo } from './info';

const url = new URL(location.href);
if (url.searchParams.get('display')) {
  document.body.classList.add('display');
}

initControllers();
updateInfo();
