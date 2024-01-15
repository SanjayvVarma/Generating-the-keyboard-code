document.addEventListener('DOMContentLoaded', function () {
    const pressedKeyDisplay = document.getElementById('pressed-key');
    const keyCodeDisplay = document.getElementById('key-code');

    document.addEventListener('keydown', function (event) {
        const pressedKey = event.key;
        const keyCode = event.keyCode;

        pressedKeyDisplay.textContent = `Pressed Key: ${pressedKey}`;
        keyCodeDisplay.textContent = `Key Code: ${keyCode}`;

        playKeyPressSound();

        storeKeyHistory(pressedKey, keyCode);
    });

});
