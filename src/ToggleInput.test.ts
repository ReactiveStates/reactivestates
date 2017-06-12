import {toggleInput} from "./ToggleInput";

describe("Toggle", function () {

    it("starts with the default initial state 'false'", function (done) {
        const t = toggleInput();
        t.changes$()
                .subscribe(v => {
                    assert.isFalse(v);
                    done();
                });
    });

    it("starts with the specified initial state", function (done) {
        const t = toggleInput(true);
        t.changes$()
                .subscribe(v => {
                    assert.isTrue(v);
                    done();
                });
    });

    it("can toggle the state", function (done) {
        const t = toggleInput();
        t.toggle();

        t.changes$()
                .subscribe(v => {
                    assert.isTrue(v);
                    done();
                });
    });

});