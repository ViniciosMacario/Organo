//Importando todos os Icones
import Discord from './Discord.svg';
import Facebook from './Facebook.svg';
import Instagram from './Instagram.svg';
import Linkedin from './Linkedin.svg';

import Config from './Config.svg'

// Objeto responsável por armazenar os Icones para que sejam acessados atráves da chavê proveniente da função(parâmetro).
const IconesObj = {
  //Util
  config: Config,

  //MidiaSocial
  discord: Discord,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
}

//Função responsável apenas por ler o Obj(IconesObj) e retornar o Icone selecionado baseado no 'name'.
export function Icones(name){
  return IconesObj[name];
}


