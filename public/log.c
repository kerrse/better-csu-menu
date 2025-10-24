#include <stdio.h>
#include <stdlib.h>

#define DATA "log.txt"

int main(int argc, char *argv[]) {
    if (argc != 3) {
        printf("Usage: %s \"<food name>\" \"<serving size>\"\n", argv[0]);
        return 1;
    }

    const char *food = argv[1];
    const char *serving = argv[2];
    FILE *f = fopen(DATA, "a");

    if (!f) {
        perror("Error opening file.");
        return 1;
    }

    fprintf(f, "%s %s\n", food, serving);
    fclose(f);

    printf("Added: %s %s\n", food, serving);
    return 0;
}
