import './style.css';

import { getHeader } from './modulos/header/header';
import { getMain } from './modulos/main/mainContainer';
import { getIntro } from './modulos/intro/intro';
import { getAvatarImg } from './modulos/avatarImg/avatarImg';

const header = getHeader();
const main = getMain();
const avatar = getAvatarImg();

document.body.appendChild(header);
document.body.appendChild(main);
main.appendChild(avatar);

getIntro(header, main);