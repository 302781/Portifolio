// arquivo: registra.c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct cadastro_t 
{
    char nome[128];
    int mat;
};

int interpreta(int argc, char * argv[], struct cadastro_t * cad);
int registra(struct cadastro_t * cad);

int main(int argc, char * argv[])
{
    struct cadastro_t cadastro;

    if (interpreta(argc, argv, &cadastro) != 0)
    {
        printf("Erro na linha de comando \r\n");
        return -1;
    }

    if (registra(&cadastro) != 0)
    {
        printf("Erro ao registrar no arquivo \r\n");
        return -1;
    }

    return 0;
}

int interpreta(int argc, char * argv[], struct cadastro_t * cad)
{
    if (argc < 3)
        return -1;

    cad->mat = atoi(argv[2]);
    strncpy(cad->nome, argv[1], sizeof(cad->nome));
    cad->nome[sizeof(cad->nome) - 1] = '\0';

    return 0;
}

int registra(struct cadastro_t * cad)
{
    FILE *fp = fopen("cad.txt", "r+");
    if (!fp)
    {
        // Se o arquivo não existe, cria novo
        fp = fopen("cad.txt", "w");
        if (!fp)
            return -1;
    }

    struct cadastro_t temp;
    int encontrado = 0;
    long pos;

    while (fread(&temp, sizeof(struct cadastro_t), 1, fp) == 1)
    {
        if (temp.mat == cad->mat)
        {
            encontrado = 1;
            pos = ftell(fp) - sizeof(struct cadastro_t);
            fseek(fp, pos, SEEK_SET);
            fwrite(cad, sizeof(struct cadastro_t), 1, fp);
            fclose(fp);
            return 0;
        }
    }

    if (!encontrado)
    {
        fwrite(cad, sizeof(struct cadastro_t), 1, fp);
    }

    fclose(fp);
    return 0;
}
