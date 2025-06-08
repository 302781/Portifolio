#include <stdio.h>
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
        printf("\r\n cadastro nao encontrado");
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
    if (!fp) return -1;

    char linha[256];
    while (fgets(linha, sizeof(linha), fp))
    {
        int mat_lido;
        char nome_lido[128];
        if (sscanf(linha, "%d;%127[^\n]", &mat_lido, nome_lido) == 2)
        {
            if (mat_lido == mat)
            {
                cad->mat = mat_lido;
                strcpy(cad->nome, nome_lido);
                fclose(fp);
                return 0;
            }
        }
    }
    fclose(fp);
    return -1;
}