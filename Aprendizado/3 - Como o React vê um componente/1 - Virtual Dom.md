# Virtual Dom

Virtual DOM é algo vital dentro do React, e é uma das coisas que fez o React ser tão famoso.Você provavelmente deve ter percebido como o React é inteligente e com rapidez ele atualiza o DOM? Então, isto tem tudo a ver com Virtual DOM!

Lembra que os componentes são vistos como objetos no React? **O Virtual DOM armazena estes objetos, e quando algo muda dentro desta árvore de objetos, o React compara o DOM real com o que a gente quer que mude (que a gente chama de candidato) e atualiza apenas o que for mudado!**

Vamos ver um exemplo:

Se a gente mudar o input de cor para uma nova cor, o que acontece?

1º O input executa o evento onChange;
2º O onChange executa a função mudarCor;
3º O mudarCor execute o setTimes;
4º O setTimes muda o state;
5º O React percebe a mudança de state e compara o Virtual DOM com o DOM real, mudando as partes necessárias (no caso tudo que está relacionado com time.cor).

Neste momento o React tem uma “cópia” da árvore antes do evento e o “candidato”, que é a árvore com as mudanças após o evento, e compara o que deve ser atualizado por causa do evento, e a partir daí ocorre as mudanças!