const WebSocketInstance = () => new Promise(resolve => {
    Object.defineProperty(window, 'WebSocket', {
        value: new Proxy(WebSocket, {
            construct: (target, argumentsList, newTarget) => {
                const websocket = Reflect.construct(target, argumentsList, newTarget);
                resolve(websocket);
                return websocket;
            }
        })
    });
});

const websocket = await WebSocketInstance();
