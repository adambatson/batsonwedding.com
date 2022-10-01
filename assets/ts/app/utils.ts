export function safeGetElementById(id: string): HTMLElement {
    var element = document.getElementById(id);
    if (!element) {
        throw new Error(`#${id} was null`);
    }
    return element;
}
