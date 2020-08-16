import { initControllers } from './controllers';
import { updateInfo } from './info';
import { renderConfig } from './config';
import { config as megaDrive6config } from './megadrive6';
import { config as eliteConfig } from './elite';

const url = new URL(location.href);
if (url.searchParams.get('display')) {
  document.body.classList.add('display');
}
const configGetParam = url.searchParams.get('config');
const config = /mega/.test(configGetParam!) ? megaDrive6config : eliteConfig;

renderConfig(config);
initControllers();
updateInfo(config);
