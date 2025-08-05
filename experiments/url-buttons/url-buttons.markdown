---
layout: page
title: URL Buttons
mainnav: false
permalink: /experiments/url-buttons/
---
<style>
    .radio-set {
        /* margin-bottom: 30px; */
    }
    .radio-container {
        display: flex;
        gap: 10px;
        margin: 20px;
    }
    .radio-button {
        border: 2px solid #ccc;
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* padding: 10px; */
        min-width: 20px;
        min-height: 20px;
    }
    .radio-button.selected {
        border-color: #4CAF50;
        box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
    }
    .radio-image {
        width: 100%;
        /* height: 100px; */
        object-fit: cover;
        display: block;
    }
    .radio-label {
        margin-top: 8px;
        font-size: 14px;
        text-align: center;
    }
</style>

<!-- First set of radio buttons -->
<div class="radio-set">
    <h3>Set 1: Favorite Colors</h3>
    <div class="radio-container" id="colorSet">
        <!-- Buttons will be added here by JavaScript -->
    </div>
</div>

<!-- Second set of radio buttons -->
<div class="radio-set">
    <h3>Set 2: Preferred Animals</h3>
    <div class="radio-container" id="animalSet">
        <!-- Buttons will be added here by JavaScript -->
    </div>
</div>

<script>
    // Configuration for all radio button sets
    const radioSetsConfig = [
        {
            id: 'colorSet',
            name: 'colors',
            options: [
                { id: 'red', label: 'Red', image: '', color: 'ff0000' },
                { id: 'green', label: 'Green', image: '', color: '00ff00' },
                { id: 'purple', label: 'Purple', image: '', color: '800080' },
                { id: 'blue', label: 'Blue', image: '', color: '0000ff' }
            ]
        },
        {
            id: 'animalSet',
            name: 'animals',
            options: [
                { id: 'cat', label: 'Cat', image: 'https://placehold.co/100x100/ffcccb/000000?text=Cat' },
                { id: 'dog', label: 'Dog', image: 'https://placehold.co/100x100/ffffcc/000000?text=Dog' },
                { id: 'bird', label: 'Bird', image: 'https://placehold.co/100x100/ccffff/000000?text=Bird' }
            ]
        }
    ];

    // Initialize all radio button sets
    function initializeRadioSets() {
        radioSetsConfig.forEach(setConfig => {
            const container = document.getElementById(setConfig.id);
            setConfig.options.forEach(option => {
                const button = createRadioButton(option, setConfig.name);
                container.appendChild(button);
            });
        });

        // Set the selected options from URL on page load
        setSelectedOptionsFromUrl();
    }

    // Create a single radio button element
    function createRadioButton(option, setName) {
        const button = document.createElement('div');
        button.className = 'radio-button';
        button.dataset.set = setName;
        button.dataset.option = option.id;
        console.log(option.color);        
        button.style.cssText = 'background-color:#' + option.color;
        button.onclick = () => selectOption(setName, option.id);

        const img = document.createElement('img');
        img.src = option.image;
        // img.alt = option.label;
        img.className = 'radio-image';

        const label = document.createElement('span');
        label.className = 'radio-label';
        // label.textContent = option.label;

        button.appendChild(img);
        // button.appendChild(label);

        return button;
    }

    // Function to select an option (radio button behavior)
    function selectOption(setName, optionId) {
        // Get the current URL search parameters
        const urlParams = new URLSearchParams(window.location.search);

        // Set the selected option in the URL
        urlParams.set(setName, optionId);

        // Update the browser history
        const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
        window.history.pushState({}, '', newUrl);

        // Update the UI to show the selected option
        updateSelectedOptionUI(setName, optionId);
    }

    // Function to update the UI based on the selected option
    function updateSelectedOptionUI(setName, selectedOptionId) {
        // Remove selection from all options in this set
        document.querySelectorAll(`.radio-button[data-set="${setName}"]`).forEach(button => {
            button.classList.remove('selected');
        });

        // Add selection to the chosen option
        const selectedElement = document.querySelector(`.radio-button[data-set="${setName}"][data-option="${selectedOptionId}"]`);
        if (selectedElement) {
            selectedElement.classList.add('selected');
        }
    }

    // Function to set the selected options from URL on page load
    function setSelectedOptionsFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);

        radioSetsConfig.forEach(setConfig => {
            const selectedOption = urlParams.get(setConfig.name);
            if (selectedOption) {
                // Verify the selected option exists in this set
                const validOption = setConfig.options.find(opt => opt.id === selectedOption);
                if (validOption) {
                    // Set the selected option in the UI
                    updateSelectedOptionUI(setConfig.name, selectedOption);
                }
            }
        });
    }

    // Initialize the radio button sets when the page loads
    window.onload = initializeRadioSets;
</script>