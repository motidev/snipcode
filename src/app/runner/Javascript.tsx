export default function runjavascript(code:string): (string | undefined)[] {
    const outputs : (string | undefined)[] = [];

    const wrappedCode = code.replace(/console\.log\((.*)\)/g, (match, p1, offset) => {
        const lineIndex = code.slice(0, offset).split("\n").length - 1;
        return `customLog(${lineIndex}, ${p1})`;
    });

    const customLog = (lineIndex: number, ...args: any[]) => {
        outputs[lineIndex] = args.map(String).join(" ");
    };

    try {
        new Function("customLog",wrappedCode)(customLog);
    } catch (error: any) {
        outputs.push(`Error: ${error.message}`);
    }

    return outputs;
}