// Criar o tabuleiro e jogadores, zerar as variáveis.
//
// 0: Posição vazia
// 1: jogada na Posição do jogador 1
// 2: jogada na Posição do jogador 2
int velha = 1;
int linha;
int coluna;
bool haVencedor = false;

int tabuleiro[9] = { 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Limpar/zerar o tabuleiro
int index;

// for (index = 0; index <= 8; index++) {
//   tabuleiro[index] = 0;
// }
// String jogador1;

// jogador1 = "Jogador 1";
// String jogador2;

// jogador2 = "Jogador 2";
String jogada = "";

// Iniciar o jogo, definir quem joga primeiro
int jogadorDaVez = 1;

// Anotar/Registrar a jogada, do primeiro jogador
// velha = 1;


bool validaPosicao(String entrada) {
  // Função para validar a entrada da jogada por meio de texto, o formato deve ser:
  // Primeiro caracter: 0 ou 1 ou 2
  // Segundo caracter: qualquer um
  // Terceiro caracter: 0 ou 1 ou 2
  bool entradaValida;

  entradaValida = false;

  // A entra da jogada não pode ter mais que 3 caracteres de comprimento.
  if (entrada.length() == 3) {

    // Verifica o primeiro caracter se há somente caracteres válidos (0,1,2).
    if (entrada[0] == '0' || entrada[0] == '1' || entrada[0] == '2') {

      // Verifica o terceiro caracter se há somente caracteres válidos (0,1,2).
      if (entrada[2] == '0' || entrada[2] == '1' || entrada[2] == '2') {

        // Retorna verdadeiro se a entrada da jogada possui os caracteres e comprimentos válidos.
        entradaValida = true;
      }
    }
  }

  return entradaValida;
}

// Headers
// String toString(double);
// int int(String);
// double toDouble(String);
// bool validaPosicao(String entrada);

int teste2(int x) {
  return x;
}

void teste() {
  String texto = Serial.readString();
}

void setup() {
  Serial.begin(115200);
}

void loop() {
  int t = 1;
  teste2(t);
  teste();
  do {
    // cout << tabuleiro[0] << tabuleiro[1] << tabuleiro[2] << endl;
    Serial.print(tabuleiro[0]);
    Serial.print(tabuleiro[1]);
    Serial.println(tabuleiro[2]);

    // cout << tabuleiro[3] << tabuleiro[4] << tabuleiro[5] << endl;
    Serial.print(tabuleiro[3]);
    Serial.print(tabuleiro[4]);
    Serial.println(tabuleiro[5]);
    // cout << tabuleiro[6] << tabuleiro[7] << tabuleiro[8] << endl;

    Serial.print(tabuleiro[6]);
    Serial.print(tabuleiro[7]);
    Serial.println(tabuleiro[8]);
    while (!Serial.available())
      ;
    jogada = "";
    // cout << "Digite a posição da sua peça JOGADOR " << jogadorDaVez << endl;
    Serial.print("Digite a posição da sua peça JOGADOR ");
    Serial.print(jogadorDaVez);

    // cin >> jogada;
    jogada = Serial.readString();

    if (validaPosicao(jogada)) {

      // Converter a jogada texto em dois inteiros linha e coluna.
      // Simula a função Serial.parseInt() do Arduino
      // linha = ToInt(jagada[0]);
      linha = int(jogada[0]);

      // CORRIGIR O ERRO DE DIGITAÇÃO
      coluna = int(jogada[2]);
      // cout << "Linha: " << linha << "; Coluna: " << coluna << endl;

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
        // cout << "Posição ocupada, jogue novamente !!!" << endl;
        Serial.println("Posição ocupada, jogue novamente !!!");

        // Informar ao Jogador 1 que a posição está preenchida, é inválida e ele precisa informar um posição válida.
      }
    } else {
      // cout << "Jogada inválida !!!" << endl;
      Serial.println("Jogada inválida !!!");
    }

    // Verificar a jogada vencedora nas linhas.
  } while (!haVencedor && velha <= 9);

  // Verificar o tabuleiro, se houve ganhador ou empate, finalizar o jogo.
  if (haVencedor) {
    // cout << "Parabéns pela a vitória, jogador " << jogadorDaVez << endl;
    Serial.print("Parabéns pela a vitória, jogador ");
    Serial.println(jogadorDaVez);
  } else {
    // cout << "Deu VELHA!!!" << endl;
    Serial.println("Deu VELHA !!!");
  }
  // cout << tabuleiro[0] << tabuleiro[1] << tabuleiro[2] << endl;
  // cout << tabuleiro[3] << tabuleiro[4] << tabuleiro[5] << endl;
  // cout << tabuleiro[6] << tabuleiro[7] << tabuleiro[8] << endl;
  // return 0;
}

void setup() {
  Serial.begin(115200);
}

// void loop() {
//   if (Serial.available()) main();
// }

// The following implements type conversion functions.
// String toString(double value) {  //int also
//   Stringstream temp;
//   temp << value;
//   return temp.str();
// }

// int int(String text) {
//   return atoi(text.c_str());
// }

// double toDouble(String text) {
//   return atof(text.c_str());
// }
