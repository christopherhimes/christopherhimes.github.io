---
layout: page
title: Gradient Placement
mainnav: false
permalink: /experiments/gradient-placement/
---
<style>
    .gradient-shadow {
        width: 300px;
        height: 200px;
        background-color: white;
        position: relative;
        overflow: hidden;
        margin: 20px;
    }

    .gradient-shadow::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 10px;
        background: linear-gradient(to right, rgba(0, 0, 255, 0.5), rgba(0, 255, 0, 0.5));
        pointer-events: none;
        z-index: 1;
    }

    /* .gradient-shadow::after {
        content: '';
        position: absolute;
        top: 10px;
        left: 0;
        right: 0;
        height: 10px;
        background: linear-gradient(to right, rgba(0, 0, 255, 0.3), rgba(0, 255, 0, 0.3));
        pointer-events: none;
        z-index: 1;
    } */
</style>
<body>
    <div class="gradient-shadow"></div>
</body>