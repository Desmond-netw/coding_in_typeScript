//Greeting utiles
export function greetBasedOnTime(name: string, time: number): string {
    if (time >= 5 && time <= 11) {
        return `Good morning, ${name}`;
    } else if (time >= 12 && time <= 17) {
        return `Good afternoon, ${name}`;
    } else if (time >= 18 && time <= 24) {
        return `Good evening, ${name}`;
    } else {
        return `Hello, ${name}`;
    }
}