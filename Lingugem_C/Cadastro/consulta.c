// arquivo: consulta.c
#include <stdio.h> // Required for fclose and other file operations
#include <stdlib.h>
#include <string.h>

struct cadastro_t 
{
    char nome[128];
    int mat;
};

int pesquisa(int mat, struct cadastro_t * cad);

int main(int argc, char * argv[])
{
    struct cadastro_t cadastro;

    if (argc < 2)
    {
        printf("Numero de matricula nao fornecido na linha de comando \r\n");
        return -1;
    }

    int mat = atoi(argv[1]);

    if (pesquisa(mat, &cadastro) != 0)
    {
        printf("\r\ncadastro nao encontrado\n");
    }
    else
    {
        puts(cadastro.nome);
    }

    return 0;
}

int pesquisa(int mat, struct cadastro_t * cad)
{
    FILE *fp = fopen("cad.txt", "r");
    if (!fp)
        return -1;

    while (fread(cad, sizeof(struct cadastro_t), 1, fp) == 1)
    {
        if (cad->mat == mat)
        {
            fclose(fp);
            return 0;
        }
    }

    fclose(fp);
    return -1;
}
