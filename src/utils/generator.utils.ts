export function genPin(): string {
    let pin: string = "";
    let gen: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@";

    for (let i = 0; i < 10; i++) {
        pin += gen.charAt(Math.floor(Math.random() * gen.length));
    }

    return pin;
}

export function delPin(pins: string[]) {
    const pin = pins;

    setTimeout(() => {
        pin.splice(0, Number.MAX_VALUE);
        console.log("Deletei tudo");
    }, 30000);
}