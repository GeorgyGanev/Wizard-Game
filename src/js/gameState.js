function initState() {

    let startX = Math.floor(Math.random() * 1000);
    let startY = Math.floor(Math.random() * 1000);

    const state = {
        player: "Olaf",
        wizard: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
        
        },
        keys: {},
    }

    return state;
}