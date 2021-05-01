import { initControllers } from './controllers';
import { updateInfo } from './info';
import { renderConfig } from './config';
import { Config } from './interfaces';
import { config as arcade8Config } from './configs/arcade8-snes';
import { config as arcade6Config } from './configs/arcade6-neogeo';
import { config as eliteConfig } from './configs/elite';
import { config as swsConfig } from './configs/sws';
import { config as megaDrive6config } from './configs/megadrive6';
import { config as megaDrive3config } from './configs/megadrive3';
import { config as famiconConfig } from './configs/famicon';
import { config as nesConfig } from './configs/nes';
import { config as mastersystemConfig } from './configs/mastersystem';
import { config as mastersystemRedConfig } from './configs/mastersystem-red';
import { config as sufamiConfig } from './configs/sufami';
import { config as snesConfig } from './configs/snes';
import { config as xbox360Config } from './configs/xbox360';
import { useStyle } from './style';

const configMapping: { [ket: string]: Config } = {
  arcade8snes: arcade8Config,
  arcade6neogeo: arcade6Config,
  elite: eliteConfig,
  sws: swsConfig,
  megadrive3: megaDrive3config,
  megadrive6: megaDrive6config,
  famicon: famiconConfig,
  nes: nesConfig,
  mastersystem: mastersystemConfig,
  mastersystemred: mastersystemRedConfig,
  sufami: sufamiConfig,
  snes: snesConfig,
  xbox360: xbox360Config,
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

useStyle(url.searchParams.get('style'));
