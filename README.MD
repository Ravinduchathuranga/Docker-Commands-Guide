## Docker First Application
This is a simple Node.js application that demonstrates how to create a Docker image using a layered architecture. The application serves a basic webpage using Express.js.
### Prerequisites
- Docker installed on your machine
- Basic knowledge of Node.js and Express.js
### Files
- `Dockerfile`: Contains instructions to build the Docker image.
- `server.js`: The main server file for the Node.js application.
- `package.json`: Contains the dependencies for the Node.js application.
- `public/index.html`: The HTML file served by the application.

### Building the Docker Image
To build the Docker image, navigate to the directory containing the `Dockerfile` and run the following command:
```bash
docker build -t mynodeapp .
```
### Running the Docker Container
After building the image, you can run a container using the following command:
```bash
docker run -p 80:80 mynodeapp
```
### Accessing the Application
Open your web browser and navigate to `http://localhost` to see the application in action.  You should see a welcome message served by the Node.js application.

### Notes
- The Dockerfile uses a layered architecture to optimize build times by caching the installation of dependencies.
- Make sure to modify the `package.json` file if you want to add more dependencies to the application.

### Docker Commands Summary
- Build the Docker image:
    ```bash
    docker build -t mynodeapp .
    ```
- Run the Docker container:
    ```bash
    docker run -d -p 3001:3000 mynodeapp
    ``` 
- Above command runs the container in detached mode. And maps port 3001 of host to port 3000 of container.

- To run exsisting image 
    ```bash
    docker start mynodeapp
    ```
- To stop a running container
    ```bash
    docker stop <container_id or container_name>    
    ```
- To view running containers
    ```bash
    docker ps
    ```
- To view all containers (running and stopped)
    ```bash
    docker ps -a
    ```
- To view all images
    ```bash
    docker images   
    ```
    
- To attach to a running container
    ```bash
    docker attach <container_id or container_name>     
    ```
- To view logs of a container
    ```bash
    docker logs <container_id or container_name>     
    ```
- To view resource usage of containers
    ```bash
    docker stats     
    ```

### Removing Docker Containers
- To remove a specific container
    ```bash
    docker rm <container_id or container_name>     
    ```     
- To run and then remove once the container stop in one command
    ```bash
    docker run --rm -p 80:80 mynodeapp
    ```    

### Removing Docker Images
- To remove a specific image
    ```bash
    docker rmi <image_id or image_name>     
    ```


### Cleaning Up Docker Resources
-To Remove all Unused images
    ```bash
    docker image prune
    ```

- To Remove all Stopped Containers
    ```bash
    docker container prune
    ```

- To Remove all Images in one command
    ```bash
    docker system prune -a
    ```

- To remove all stopped containers
    ```bash
    docker system prune --volumes
    ```