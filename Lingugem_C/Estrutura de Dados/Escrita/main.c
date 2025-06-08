#include <stdio.h>

int main() {
    FILE *file;
    int x = 42;

    file = fopen("helloworld.txt", "w");
    if (file == NULL) {
        perror("Erro ao abrir o arquivo");
        return 1;
    }

    fputs("Olá Mundo\n", file);
    fprintf(file, "x=%d\n", x);

    fflush(file);
    fclose(file);

    printf("Arquivo escrito com sucesso.\n");

    return 0;
}