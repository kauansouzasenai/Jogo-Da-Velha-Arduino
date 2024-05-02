function main() {
    // Criar o tabuleiro e jogadores, zerar as variáveis.
    // 
    // 0: Posição vazia
    // 1: jogada na Posição do jogador 1
    // 2: jogada na Posição do jogador 2
    var velha;
    var linha;
    var coluna;
    var haVencedor;

    haVencedor = false;
    var tabuleiro = createArray(9);

    // Limpar/zerar o tabuleiro
    var index;

    for (index = 0; index <= 8; index++) {
        tabuleiro[index] = 0;
    }
    var jogador1;

    jogador1 = "Jogador 1";
    var jogador2;

    jogador2 = "Jogador 2";
    var jogada;

    // Iniciar o jogo, definir quem joga primeiro
    var jogadorDaVez;

    jogadorDaVez = 1;

    // Anotar/Registrar a jogada, do primeiro jogador
    velha = 1;
    do {
        window.alert(tabuleiro[0].ToString() + tabuleiro[1] + tabuleiro[2]);
        window.alert(tabuleiro[3].ToString() + tabuleiro[4] + tabuleiro[5]);
        window.alert(tabuleiro[6].ToString() + tabuleiro[7] + tabuleiro[8]);
        jogada = "";
        window.alert("Digite a posição da sua peça JOGADOR " + jogadorDaVez);
        jogada = window.prompt('Enter a value for jogada');
        if (validaPosicao(jogada)) {

            // Converter a jogada texto em dois inteiros linha e coluna.
            // Simula a função Serial.parseInt() do Arduino
            linha = parseInt(jogada.charAt(0));

            // CORRIGIR O ERRO DE DIGITAÇÃO
            coluna = parseInt(jogada.charAt(2));
            window.alert("Linha: " + linha + "; Coluna: " + coluna);

            // Verificar se a posição 'jogada' é valida
            if (tabuleiro[3 * linha + coluna] == 0) {
                tabuleiro[3 * linha + coluna] = jogadorDaVez;
                if (tabuleiro[0] == jogadorDaVez && tabuleiro[1] == jogadorDaVez && tabuleiro[2] == jogadorDaVez || tabuleiro[3] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[5] == jogadorDaVez || tabuleiro[6] == jogadorDaVez && tabuleiro[7] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
                    haVencedor = true;
                } else {

                    // Verificar a jogada vencedora nas colunas.
                    if (tabuleiro[0] == jogadorDaVez && tabuleiro[3] == jogadorDaVez && tabuleiro[6] == jogadorDaVez || tabuleiro[1] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[7] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[5] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
                        haVencedor = true;
                    } else {

                        // Verificar a jogada vencedora nas diagonais.
                        if (tabuleiro[0] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[8] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[6] == jogadorDaVez) {
                            haVencedor = true;
                        } else {

                            // Trocar o jogador
                            if (jogadorDaVez == 1) {
                                jogadorDaVez = 2;
                            } else {
                                jogadorDaVez = 1;
                            }
                        }
                    }
                }
                velha = velha + 1;
            } else {
                window.alert("Posição ocupada, jogue novamente !!!");

                // Informar ao Jogador 1 que a posição está preenchida, é inválida e ele precisa informar um posição válida.
            }
        } else {
            window.alert("Jogada inválida !!!");
        }

        // Verificar a jogada vencedora nas linhas.
    } while (!haVencedor && velha <= 9);

    // Verificar o tabuleiro, se houve ganhador ou empate, finalizar o jogo.
    if (haVencedor) {
        window.alert("Parabéns pela a vitória, jogador " + jogadorDaVez);
    } else {
        window.alert("Deu VELHA!!!");
    }
    window.alert(tabuleiro[0].ToString() + tabuleiro[1] + tabuleiro[2]);
    window.alert(tabuleiro[3].ToString() + tabuleiro[4] + tabuleiro[5]);
    window.alert(tabuleiro[6].ToString() + tabuleiro[7] + tabuleiro[8]);
}

function validaPosicao(entrada) {
    // Função para validar a entrada da jogada por meio de texto, o formato deve ser:
    // Primeiro caracter: 0 ou 1 ou 2
    // Segundo caracter: qualquer um
    // Terceiro caracter: 0 ou 1 ou 2
    var entradaValida;

    entradaValida = false;

    // A entra da jogadanão pode ter mais que 3 caracteres de comprimento.
    if (entrada.length() == 3) {

        // Verifica o primeiro caracter se há somente caracteres válidos (0,1,2).
        if (entrada.charAt(0) == "0" || entrada.charAt(0) == "1" || entrada.charAt(0) == "2") {

            // Verifica o terceiro caracter se há somente caracteres válidos (0,1,2).
            if (entrada.charAt(2) == "0" || entrada.charAt(2) == "1" || entrada.charAt(2) == "2") {

                // Retorna verdadeiro se a entrada da jogada possui os caracteres e comprimentos válidos.
                entradaValida = true;
            }
        }
    }
    
    return entradaValida;
}
