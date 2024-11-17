body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
}

body {
    background-size: cover;
    background-position: center;
    transition: background-image 0.5s ease-in-out;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 30, 60, 0.6); /* Deep navy with transparency */
    z-index: 1;
}

.particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 2;
}

.particle {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation: float 6s infinite ease-in-out;
}

@keyframes float {
    0% {
        transform: translateY(0) scale(1);
    }
    50% {
        transform: translateY(-100px) scale(1.2);
    }
    100% {
        transform: translateY(0) scale(1);
    }
}

.left-section {
    position:relative;
    left: 5%;
    top: 60%;
    transform: translateY(-50%);
    color: #e7e4dc;
    z-index: 3;
    max-width: 40%;
    animation: fadeIn 2s ease-in;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.left-section h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #ffd700;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
}

.left-section p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #dcdcdc;
    margin-bottom: 30px;
}

.login-container {
    position: fixed;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    width: 350px;
    background: rgba(255, 255, 255, 0.95);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 3;
}

.login-container h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: #1a3c40;
}

.login-container input {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #b5c8bf;
    border-radius: 8px;
    font-size: 1rem;
    background: #f7f7f7;
    transition: border 0.3s ease, box-shadow 0.3s ease;
}

.login-container input:focus {
    border-color: #006d77;
    box-shadow: 0px 0px 5px rgba(0, 109, 119, 0.5);
    outline: none;
}

.login-container button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    background: #006d77;
    color: #ffffff;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
}

.login-container button:hover {
    background: #004f54;
    transform: scale(1.03);
}

.login-container button:active::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    animation: ripple 0.6s ease-out;
}

@keyframes ripple {
    from {
        transform: scale(0);
        opacity: 1;
    }
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.light-theme {
    color: #333;
}

.dark-theme {
    background-color: rgba(51, 51, 51, 0.8); /* Dark overlay */
    color: #f5f5f5;
}

.container {
    background: rgba(255, 255, 255, 0.9); /* Light overlay */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 600px;
    text-align: center;
    margin: 20px auto;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

header h1 {
    margin: 0;
}

textarea {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    resize: vertical;
}

input[type="text"] {
    width: calc(100% - 22px);
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
   [_{{{CITATION{{{_1{](https://github.com/antydemant/lessons-2020/tree/0c6095f45bfd841914ac8e7e25f8c9df273dea69/02-closure-and-context%2Fhomework%2FREADME.md)
