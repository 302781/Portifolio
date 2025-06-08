#include <stdio.h>

int main(){
    int idade;
    float altura;
    char inicial;

    printf("\n Digite sua idade: ");
    scanf("%d", &idade);

    printf("\n Insira sua altura: ");
    scanf("%f", &altura);

    printf("\n Digite a inicial do seu nome: ");
    fflush(stdin); // imprima o que tiver em seguida
    scanf(" %c", &inicial);

    printf("\n Idade: %d anos \n altura: %.2f \n Inicial: %c", idade, altura, inicial);

    return 0;
}