import Alterar from '../../assets/ConfigSvg/Alterar.svg';
import Descricao from '../../assets/ConfigSvg/Descricao.svg';
import Editar from '../../assets/ConfigSvg/Editar.svg';
import Excluir from '../../assets/ConfigSvg/Excluir.svg';
import Remover from '../../assets/ConfigSvg/Remover.svg';

const iconsObj = {
  alterar: Alterar,
  descricao: Descricao,
  editar: Editar,
  excluir: Excluir,
  remover: Remover,
}

export function iconesConfig(name){
  return iconsObj[name]
}

