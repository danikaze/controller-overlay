import { initControllers } from './controllers';
import { updateInfo } from './info';
import { renderConfig } from './config';
import { config } from './elite';

const url = new URL(location.href);
if (url.searchParams.get('display')) {
  document.body.classList.add('display');
}

renderConfig(config);
initControllers();
updateInfo(config);
