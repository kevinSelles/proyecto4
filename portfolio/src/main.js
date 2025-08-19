import './style.css';

import { getHeader } from './modulos/header/header';
import { getMain } from './modulos/main/mainContainer';
import { getIntro } from './modulos/intro/intro';
import { getAvatarImg } from './modulos/avatarImg/avatarImg';

const header = getHeader();
const avatar = getAvatarImg();
const main = getMain(avatar);

document.body.appendChild(header);
document.body.appendChild(main);

getIntro(header, main);