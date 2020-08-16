import { initControllers } from './controllers';
import { updateInfo } from './info';
import { renderConfig } from './config';
import { config as eliteConfig } from './configs/elite';
import { config as megaDrive6config } from './configs/megadrive6';
import { config as megaDrive3config } from './configs/megadrive3';
import { Config } from './constants';

const url = new URL(location.href);
if (url.searchParams.get('display')) {
  document.body.classList.add('display');
}
const config = selectConfig(url.searchParams.get('config'));

renderConfig(config);
initControllers();
setTimeout(() => updateInfo(config), 0);

function selectConfig(param?: string | null): Config {
  const mapping: { [ket: string]: Config } = {
    default: eliteConfig,
    elite: eliteConfig,
    megadrive3: megaDrive3config,
    megadrive6: megaDrive6config,
    megadrive: megaDrive6config,
  };

  return mapping[param!] || eliteConfig;
}
