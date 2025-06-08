#include <stdio.h>

void selectionSort(int arr[], int n) {
    int i, j, minIdx, temp;

    for (i = 0; i < n - 1; i++) {
        minIdx = i;

        // Encontra o menor elemento no restante do array
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        // Troca o menor elemento com o primeiro elemento não ordenado
        if (minIdx != i) {
            temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int vetor[] = {64, 25, 12, 22, 11};
    int tamanho = sizeof(vetor) / sizeof(vetor[0]);

    printf("Vetor original:\n");
    printArray(vetor, tamanho);

    selectionSort(vetor, tamanho);

    printf("Vetor ordenado com Selection Sort:\n");
    printArray(vetor, tamanho);

    return 0;
}
