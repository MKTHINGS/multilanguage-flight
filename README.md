# MK-THINGS Multilingual 3D Flight Experience
![Badge](https://hitscounter.dev/api/hit?url=https%3A%2F%2Fmultilanguage-flight.vercel.app%2F&label=Visitors&icon=display&color=%23198754) ![Badge](https://hitscounter.dev/api/hit?url=https%3A%2F%2Fgithub.com%2FMKTHINGS%2Fmultilanguage-flight&label=Project+Visits&icon=github&color=%23000000) [![Website](https://img.shields.io/website?url=https%3A%2F%2Fmultilanguage-flight.vercel.app)](https://multilanguage-flight.vercel.app) ![Static Badge](https://img.shields.io/badge/Content_and_concept_hours-5h-yellow) ![Static Badge](https://img.shields.io/badge/AI_hours-1h-orange) ![Static Badge](https://img.shields.io/badge/MKTHINGS_hours-4h-rebeccapurple)

<p align="center"><img src="https://github.com/MKTHINGS/multilanguage-flight/blob/main/public/images/preview_low.gif?raw=true"></p>

This project is a React Three Fiber (R3F) web application that provides an interactive 3D flight experience with multilingual support. It's a modified version of the original [WAWATMOS project](https://github.com/wass08/r3f-wawatmos-final) with added features and improvements.

## Features

- **Multilingual Support**: The application supports six languages:
  - English
  - Italian
  - Spanish
  - French
  - German
  - Romanian

- **Automatic Language Detection**: The application automatically detects the user's browser language settings and displays content in the appropriate language.

- **Interactive 3D Flight Experience**: Users can navigate through a 3D environment with an airplane, experiencing a virtual flight journey.

- **Clickable Navigation Links**: The "Services", "Fear of flying?", and "Blog" sections are clickable links that redirect to [https://mkthings.github.io/blog](https://mkthings.github.io/blog).

- **Contact Section**: A new Contact section has been added to the application.

- **Rebranded Logo**: The logo has been changed from "WAWATMOS" to "MK-THINGS".

- **Redirect Functionality**: After completing the flight experience, the application automatically redirects to [GITHUB Profile](https://github.com/mkthings) after 5 seconds.

## Project Structure

```
r3f-wawatmos-multilingual/
├── public/
│   ├── fonts/
│   ├── images/
│   └── models/
│       ├── airplane/
│       └── cloud/
├── src/
│   ├── components/
│   │   ├── Airplane.jsx
│   │   ├── Background.jsx
│   │   ├── Cloud.jsx
│   │   ├── Experience.jsx
│   │   ├── Overlay.jsx
│   │   ├── Speed.jsx
│   │   └── TextSection.jsx
│   ├── contexts/
│   │   └── Play.jsx
│   ├── translations/
│   │   ├── LanguageContext.jsx
│   │   ├── en.json
│   │   ├── it.json
│   │   ├── es.json
│   │   ├── fr.json
│   │   ├── de.json
│   │   └── ro.json
│   ├── utils/
│   │   └── fadeMaterial.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## How to Run the Project

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## Technologies Used

- **React**: Frontend library for building user interfaces
- **React Three Fiber (R3F)**: React renderer for Three.js
- **Three.js**: JavaScript 3D library
- **GSAP**: Animation library
- **i18next**: Internationalization framework

## Browser Compatibility

The application is compatible with modern browsers that support WebGL:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

This project is a modified version of the original [WAWATMOS project](https://github.com/wass08/r3f-wawatmos-final), with added multilingual support, navigation links, contact section, rebranded logo, and redirect functionality.

### 3D Model credits

Airplane by Poly by Google [CC-BY](https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/8VysVKMXN2J)