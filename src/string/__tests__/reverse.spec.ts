import reverse from "../reverse";

describe("string#reverse", ():void => {
    it("reverses string", ():void => {
        expect(reverse("abcdef")).toBe("fedcba");
        expect(reverse("adam")).toBe("mada");
    })

    it("keeps upper letters", ():void => {
        expect(reverse("Adam")).toBe("madA");
        expect(reverse("Mateusz")).toBe("zsuetaM");
    })

    it("retrieves empty string when given empty string or null", ():void => {
        expect(reverse("")).toBe("");
        expect(reverse(null)).toBe("");
        
    })
})