# DevQuote

DevQuote is a simple API that serves random programming-related quotes. It's perfect for developers who need a quick laugh or some inspiration while coding!

## Features

- Provides random programming quotes via a REST API.
- Lightweight and easy to deploy.
- Built with Node.js and Express.



## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (optional for containerized deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/harshtripathi02/devquote.git
   cd devquote
   ```

2. Navigate to the `app` directory and install dependencies:

```bash
cd app
npm install
```

3. Start the server:

```bash
npm start
```

4. GitHub Copilot
Navigate to the app directory and install dependencies:

Start the server:

Open your browser or API client (e.g., Postman) and visit:

http://localhost:3000/quotes


Example Response:

```bash
{
  "quote": "Programming is 10% writing code and 90% figuring out why it doesn’t work."
}
```


### Deployment
To deploy the project, you can use a containerized environment with Docker. Here's how:

1. Build the Docker image:

```bash
docker build -t devquote-api .
```

2. Run the container:

```bash
docker run -p 3000:3000 devquote-api
```

3. Access the API at:

```bash
http://localhost:3000/quotes
```

### Kubernetes

1. Apply the deployment and service YAML files:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

2. Access the service using the NodePort:

```bash
http://<node-ip>:30080/
```

### Project Structure

DevQuote/
├── app/
│   ├── [index.js](http://_vscodecontentref_/2)         # Main server file
│   ├── [quotes.json](http://_vscodecontentref_/3)      # List of programming quotes
│   └── [package.json](http://_vscodecontentref_/4)     # Node.js dependencies and scripts
├── k8s/
│   ├── [deployment.yaml](http://_vscodecontentref_/5)  # Kubernetes deployment configuration
│   └── [service.yaml](http://_vscodecontentref_/6)     # Kubernetes service configuration
├── Dockerfile           # Docker configuration
└── [README.md](http://_vscodecontentref_/7)            # Project documentation
