---
layout: page
title: 'test'
permalink: /test/
mainnav: false
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Default to light mode */
        :root {
            --background-color: #ffffff;
            --text-color: #000000;
            color-scheme: light;
        }

        /* Dark mode styles */
        body.dark-mode {
            --background-color: #333333;
            --text-color: #ffffff;
            color-scheme: dark;
        }

        /* Apply the variables */
        body {
            background-color: var(--background-color);
            color: var(--text-color);
        }

        /* Style the button */
        #theme-toggle {
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            border-radius: 4px;
        }

        #theme-toggle:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <button id="theme-toggle">
        <span id="sun-icon">
            🌞
        </span>
        <span id="moon-icon" style="display: none;">
            🌙
        </span>
    </button>
    <script>
        // Function to set the theme
        function setTheme(theme) {
            if (theme === 'dark') {
                document.body.classList.add('dark-mode');
                document.getElementById('sun-icon').style.display = 'none';
                document.getElementById('moon-icon').style.display = 'inline';
            } else {
                document.body.classList.remove('dark-mode');
                document.getElementById('sun-icon').style.display = 'inline';
                document.getElementById('moon-icon').style.display = 'none';
            }
            localStorage.setItem('theme', theme);
        }

        // Initialize the theme based on the user's browser preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const currentTheme = localStorage.getItem('theme');

        // Determine the initial theme
        let initialTheme;
        if (currentTheme === 'dark') {
            initialTheme = 'dark';
        } else if (currentTheme === 'light') {
            initialTheme = 'light';
        } else {
            initialTheme = prefersDarkScheme.matches ? 'dark' : 'light';
        }

        // Set the initial theme
        setTheme(initialTheme);

        // Listen for changes in the user's preferred color scheme
        prefersDarkScheme.addEventListener('change', e => {
            const newTheme = e.matches ? 'dark' : 'light';
            setTheme(newTheme);
        });

        // Update local storage when theme is toggled
        document.getElementById('theme-toggle').addEventListener('click', function() {
            const isDarkMode = document.body.classList.contains('dark-mode');
            setTheme(isDarkMode ? 'light' : 'dark');
        });
    </script>
</body>
</html>