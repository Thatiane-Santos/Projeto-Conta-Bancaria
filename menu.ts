import readlinesync = require("readline-sync");
import { colors } from "./src/util/colors";
import { Conta } from "./src/model/conta";

export function main() {

    let opcao: number;

    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
                   "***************************************************************");
        console.log("                                                               ");
        console.log("                    BANCO DAS DEVS                             ");
        console.log("                                                               ");
        console.log("***************************************************************");
        console.log("                                                               ");
        console.log("                    1-  Criar Conta                            ");
        console.log("                    2- Listar todas as Contas                  ");
        console.log("                    3- Buscar Conta por numero                 ");
        console.log("                    4 - Atualizar Dados da Conta               ");
        console.log("                    5 - Apagar Conta                           ");
        console.log("                    6 - Sacar                                  ");
        console.log("                    7 - Depositar                              ");
        console.log("                    8 - Transferir valores entre Contas        ");
        console.log("                    9 - Sair                                   ");
        console.log("                                                               ");
        console.log("***************************************************************");
        console.log("                                                               ",
        colors.reset);

        console.log("Entre com a opcao desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,
                "\nBanco das Devs - Respeite a sua e a nossa historia");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);

        }
        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por numero\n\n");

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n");

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n");

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n");

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDeposito\n\n");

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferencia entre Contas\n\n");

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpcao Invalida!\n");

                keyPress()
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Thatiane");
    console.log("Generation Brasil - thatiane.ssantana@gmail.com");
    console.log("github.com/Thatiane-Santos");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();