import { initControllers } from './controllers';
import { updateInfo } from './info';
import { renderConfig } from './config';
import { Config } from './constants';
import { config as eliteConfig } from './configs/elite';
import { config as megaDrive6config } from './configs/megadrive6';
import { config as megaDrive3config } from './configs/megadrive3';
import { config as famiconConfig } from './configs/famicon';
import { config as nesConfig } from './configs/nes';
import { config as mastersystemConfig } from './configs/mastersystem';
import { config as mastersystemRedConfig } from './configs/mastersystem-red';
import { config as sufamiConfig } from './configs/sufami';
import { config as snesConfig } from './configs/snes';

const configMapping: { [ket: string]: Config } = {
  elite: eliteConfig,
  megadrive3: megaDrive3config,
  megadrive6: megaDrive6config,
  famicon: famiconConfig,
  nes: nesConfig,
  mastersystem: mastersystemConfig,
  mastersystemred: mastersystemRedConfig,
  sufami: sufamiConfig,
  snes: snesConfig,
};

const url = new URL(location.href);
if (url.searchParams.get('display')) {
  document.body.classList.add('display');
}
const param = url.searchParams.get('config') || 'elite';
const config = configMapping[param.toLowerCase()] || eliteConfig;

renderConfig(config);
initControllers();
setTimeout(() => updateInfo(config, configMapping), 0);
