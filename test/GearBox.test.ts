import "jest";
import GearBox from "../src/GearBox";

describe("GearBoxTest", () => {
    it("Shift up when high rpm", () => {
        const gearBox = new GearBox();
        gearBox.current_gear = 2;
        expect(gearBox.changeGear(2001)).toBe(3);
    });

    it("Don't change gear when in range", () => {
        const gearBox = new GearBox();
        gearBox.current_gear = 2;
        expect(gearBox.changeGear(2000)).toBe(2);
    });

    it("Shifts down when low rpm", () => {
        const gearBox = new GearBox();
        gearBox.current_gear = 2;
        expect(gearBox.changeGear(499)).toBe(1);
    });

    it("Does not shift up out of neutral", () => {
        const gearBox = new GearBox();
        gearBox.current_gear = 0;
        expect(gearBox.changeGear(2001)).toBe(0);
    });

    it("Does not shift down out of neutral", () => {
        const gearBox = new GearBox();
        gearBox.current_gear = 0;
        expect(gearBox.changeGear(499)).toBe(0);
    });

});
