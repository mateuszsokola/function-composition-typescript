import formatMoney from "../formatMoney";

describe("formatMoney", ():void => {
    it("formates positive numbers", ():void => {
        expect(formatMoney(0)).toBe("0.00");
        expect(formatMoney(1)).toBe("0.01");
        expect(formatMoney(100)).toBe("1.00");
        expect(formatMoney(1299)).toBe("12.99");
        expect(formatMoney(10000000)).toBe("100,000.00");
    })

    it("formates negative numbers", ():void => {
        expect(formatMoney(-1)).toBe("-0.01");
        expect(formatMoney(-100)).toBe("-1.00");
        expect(formatMoney(-1299)).toBe("-12.99");
        expect(formatMoney(-10000000)).toBe("-100,000.00");
    })

    it("throws error when non-integer numbers given", ():void => {
        expect(():string => formatMoney(0.1)).toThrowError("Number must be integer")
    })
})