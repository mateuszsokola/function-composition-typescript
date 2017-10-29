import format from "../format";

describe("string#format", ():void => {
    it("is a function factory", ():void => {
        const formatter:Function = format(/a-z/g, ",");

        expect(formatter).toBeInstanceOf(Function)
    })
    
    it("appends separator to matching string", ():void => {
        const formatter:Function = format(/[0-9]{1,3}/g, ",");

        expect(formatter("1000")).toBe("1,000");
        expect(formatter("10100")).toBe("10,100");
        expect(formatter("100000000")).toBe("100,000,000");
    })

    it("return empty string if no match", ():void => {
        const formatter:Function = format(/[0-9]{1,3}/g, ",");

        expect(formatter("")).toBe("");
    })
})