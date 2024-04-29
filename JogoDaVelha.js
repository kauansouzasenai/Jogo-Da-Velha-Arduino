function main() {
    // Criar o tabuleiro e jogadores, zerar as variáveis.
    // 
    // 0: Posição vazia
    // 1: jogada na Posição do jogador 1
    // 2: jogada na Posição do jogador 2
    // Variável de controle da qtde de jogadas, caso passe de 9, termina o jogo em empate (VELHA)!
    var velha;

    velha = 1;
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
    do {
        imprimeTabuleiro(tabuleiro);
        jogada = "";
        window.alert("Digite a posição da sua peça JOGADOR " + jogadorDaVez);
        jogada = window.prompt('Enter a value for jogada');

        // Simula a função Serial.parseInt() do Arduino
        linha = parseInt(jogada.charAt(0));
        coluna = parseInt(jogada.charAt(2));

        // Verificar se a posição 'jogada' é valida
        if (linha < 3 && coluna < 3) {

            // Converter a jogada texto em dois inteiros linha e coluna.
            if (getValArrayInt(linha, coluna, tabuleiro, 3) == 0) {
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
                            velha = velha + 1;
                        }
                    }
                }
            } else {

                // Informar ao Jogador 1 que a posição está preenchida, é inválida e ele precisa informar um posição válida.
                window.alert("A posição que você tentou inserir uma peça já esta ocupada!!!");
            }

            // Verificar a jogada vencedora nas linhas.
        } else {
            window.alert("Linha ou coluna inválida!!! Linha: " + linha + "; Coluna: " + coluna);
        }
    } while (!haVencedor && velha <= 9);

    // Verificar o tabuleiro, se houve ganhador ou empate, finalizar o jogo.
    if (haVencedor) {
        window.alert("O jogador " + jogadorDaVez + " venceu!!!");
    } else {
        window.alert("EMPATE !!! VELHA !!!");
    }
}

function getValArrayInt(linha, coluna, matriz, qtdeLinhas) {
    var valor;

    valor = matriz[qtdeLinhas * linha + coluna];
    
    return valor;
}

function imprimeTabuleiro(t) {
    window.alert(t[0].ToString() + t[1] + t[2]);
    window.alert(t[3].ToString() + t[4] + t[5]);
    window.alert(t[6].ToString() + t[7] + t[8]);
}
