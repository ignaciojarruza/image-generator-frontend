# OpenAI Dall-E Image Generation React.js Frontend

This React.js frontend project connects to a Node.js backend for image generation using OpenAI's Dall-E model. It offers a user-friendly interface to make requests through the browser, allowing users to generate images based on provided prompts. This project demonstrates how to integrate Dall-E's image generation capabilities into a web application using React.js. You can select the model to utilize in the generation process.

## Description

The frontend application provides a simple yet intuitive UI for users to interact with the Dal-E-3 image generation backend. Users can input prompts via the browser, send requests to the backend, and view the generated images directly within the application. This project serves as a showcase of how to seamlessly integrate Dal-E-3's image generation functionality into web applications.

The backend Node.js server for image generation can be found [here](https://github.com/ignaciojarruza/image-generator).

## Features

- User-Friendly Interface: Offers an easy-to-use interface for making image generation requests.
- Real-Time Feedback: Provides immediate feedback on the generated images within the browser.
- Customization Options: Allows users to input prompts and specify generation parameters directly through the UI.
- Responsive Design: Ensures compatibility across different devices and screen sizes.

## Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/ignaciojarruza/image-generator-frontend.git
```

2. Navigate to the project directory:

```
cd image-generator-frontend
```

3. Install dependencies:

```
npm install
```

4. Configure the backend endpoint: Open the `src/config.js` file and update the `BACKEND_URL` variable with the URL of your Node.js backend server.

5. Start the development server:

```
npm start
```

The application will be accessible at `http://localhost:3000` by default.

## Usage

1. Open the application in your web browser.
2. Input a prompt in the designated field.
3. Optionally, adjust the generation parameters (e.g., image size, quality) using the provided options.
4. Click the "Generate" button to send a request to the backend for image generation.
5. Once the image is generated, it will be displayed in the UI.
6. You can repeat the process to generate additional images with different prompts or parameters.
