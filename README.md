# Ng-Resource: Image Generator

This project demonstrates the use of the new Angular `resource` to streamline HTTP calls. The application automatically triggers API requests as users modify input fields, fetching AI-generated images based on the provided input using OpenAI's API.

## Features

- **Dynamic Inputs**: Real-time updates based on user input.
- **Automatic API Calls**: Seamless integration with Angular's `resource` to manage requests efficiently.
- **AI-Generated Images**: Generates high-quality images based on user-selected attributes.
- **User-Friendly Interface**: Simple dropdown-based input for attributes like shape, texture, and color.

## How It Works

1. **User Input**: Users interact with dropdown menus to define the image properties (e.g., "Three", "Viscous", "Red").
2. **Reactive Calls**: Every input change triggers a call to OpenAI's API via Angular's `resource`.
3. **Image Generation**: The API responds with an AI-generated image based on the provided input, which is then displayed in real time.

## Prerequisites

- Node.js and npm installed.
- Angular CLI installed.
- OpenAI API key.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JuanCGit/ng-resource.git
   cd ng-resource
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your OpenAI API key:
   - Open the `src/environment.ts` file and update it with your API key:
     ```typescript
     export const environment = {
       production: false,
       openAI: {
         apiKey: "INSERT YOUR API KEY HERE",
         apiUrl: "https://api.openai.com/v1/images/generations",
         model: "dall-e-3",
       },
     };
     ```
4. Start the development server:
   ```bash
   ng serve
   ```

## Usage

1. Open the application in your browser at `http://localhost:4200`.
2. Use the dropdown menus to select the properties of the image.
3. Watch as the AI-generated image updates in real time.

## Technical Details

- **Angular Resource**: Utilizes the new `resource` API for declarative HTTP request management.
- **Reactive Forms**: Implements `FormGroup` and `FormControl` for handling user input dynamically.
- **OpenAI API**: Integrates with OpenAI's image generation endpoint for real-time responses.

## Future Improvements

- Add more input options for detailed customization.
- Implement caching for frequently generated images.
- Improve UI/UX for better accessibility and responsiveness.

---

Feel free to contribute or provide feedback to enhance this project!
