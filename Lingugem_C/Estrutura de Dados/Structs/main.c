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
    if (interpreta(argc, argv, &cadastro) !=0)
    {
        printf("Erro na linha de comando \r\n");
        return -1;
    }
    if (registra(&cadastro) !=0)
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
        fp = fopen("cad.txt", "w+");
        if (!fp) return -1;
    }
    fprintf(fp, "%s %d\n", cad->nome, cad->mat);
    fclose(fp);
    return 0;
}
 struct cadastro_t lista[100];
    int count = 0;
    char linha[256];
    int atualizado = 0;

    while (fgets(linha, sizeof(linha), fp))
    {
        int mat_lido;
        char nome_lido[128];
        if (sscanf(linha, "%d;%127[^\n]", &mat_lido, nome_lido) == 2)
        {
            if (mat_lido == cad->mat)
            {
                strcpy(lista[count].nome, cad->nome);
                lista[count].mat = cad->mat;
                atualizado = 1;
            }
            else
            {
                strcpy(lista[count].nome, nome_lido);
                lista[count].mat = mat_lido;
            }
            count++;
        }
    }

    if (!atualizado)
    {
        lista[count++] = *cad;
    }

    freopen("cad.txt", "w", fp);
    for (int i = 0; i < count; i++)
    {
        fprintf(fp, "%d;%s\n", lista[i].mat, lista[i].nome);
    }

    fclose(fp);
    return 0;
}