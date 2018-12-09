class Utils {

    public static fireEvent(target: Element, eventName: string): boolean {
        let event = new Event(eventName)
        return target.dispatchEvent(event)
    }

    public static performClick(target: Element): void {
        this.fireEvent(target, 'click')
    }

    public static select(selector: string): HTMLElement {
        return document.querySelector(selector)
    }

    public static convertToNum(strTime: string): number {
        let explodeNum = (strTime.trim()).split(':')
        return parseInt(explodeNum[0]) + (parseInt(explodeNum[1]) / 60)
    }

}

export default Utils;
