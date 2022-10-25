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
            speed: 10,
        },
        bugStats: {
            width: 50,
            height: 50,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 3000
        },
        keys: {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false
        },
    }

    return state;
}