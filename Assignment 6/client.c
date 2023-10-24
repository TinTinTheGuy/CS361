#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>

#define PORT 12345

int main() {
    int client_socket;
    struct sockaddr_in server_addr;
    char message[1024];

    // Create socket
    client_socket = socket(AF_INET, SOCK_STREAM, 0);
    if (client_socket == -1) {
        perror("Socket creation failed");
        exit(EXIT_FAILURE);
    }

    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(PORT);
    inet_pton(AF_INET, "127.0.0.1", &(server_addr.sin_addr));

    // Connect to the server
    if (connect(client_socket, (struct sockaddr*)&server_addr, sizeof(server_addr)) == -1) {
        perror("Connection failed");
        close(client_socket);
        exit(EXIT_FAILURE);
    }

    printf("Connected to the server at %d\n", PORT);

    // Send a message to the server
    strcpy(message, "A message from CS361");
    send(client_socket, message, strlen(message), 0);

    printf("Message sent: %s\n", message);

    // Close the socket
    close(client_socket);

    return 0;
}
