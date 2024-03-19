let partidas = 0;

do {
    function rankedResults(victory, defeat){
        let balanceVictory = victory - defeat;
        if(victory<10){
            return `O jogador tem ${victory} vitórias e ${defeat}, o saldo de vitórias é de ${balanceVictory} e está no rank Ferro`
        }else if(victory>=10 && victory<=20){
            return `O jogador tem ${victory} vitórias e ${defeat}, o saldo de vitórias é de ${balanceVictory} e está no rank Bronze`
        }else if(victory>20 && victory<=50){
            return `O jogador tem ${victory} vitórias e ${defeat}, o saldo de vitórias é de ${balanceVictory} e está no rank Prata`
        }else if(victory>50 && victory<=80){
            return `O jogador tem ${victory} vitórias e ${defeat}, o saldo de vitórias é de ${balanceVictory} e está no rank Ouro`
        }else if(victory>80 && victory<=90){
            return `O jogador tem ${victory} vitórias e ${defeat}, o saldo de vitórias é de ${balanceVictory} e está no rank Diamante`
        }else if(victory>90 && victory<=100){
            return `O jogador tem ${victory} vitórias e ${defeat}, o saldo de vitórias é de ${balanceVictory} e está no rank Lendário`
        }else if(victory>100){
            return `O jogador tem ${victory} vitórias e ${defeat}, o saldo de vitórias é de ${balanceVictory} e está no rank Imortal`
        }
    }
} while (partidas<0);


let ranking = rankedResults(120, 2);
console.log(ranking);