import { test } from "@bearz/testing";
import { debug, ok } from "@bearz/assert";
import { isAscii, isAsciiAt } from "./is_ascii.ts";

test("chars::isAscii", () => {
    debug("isAscii 65", isAscii(65));

    ok(isAscii(65));
    ok(isAscii(0));
    ok(isAscii(127));
    ok(!isAscii(128));
    ok(!isAscii(255));
    ok(!isAscii(256));
    ok(!isAscii(-1));
    ok(!isAscii(-128));
    ok(!isAscii(-255));
    ok(!isAscii(-256));
    ok(!isAscii(Infinity));
    ok(!isAscii(-Infinity));
    ok(!isAscii(NaN));
    ok(!isAscii(0.1));
    ok(!isAscii(-0.1));
    ok(!isAscii(0.9));
    ok(!isAscii(-0.9));
    ok(!isAscii(1.1));
    ok(!isAscii(-1.1));
    ok(!isAscii(1.9));
    ok(!isAscii(-1.9));
    ok(isAscii(1.0));
    ok(!isAscii(-1.0));
    ok(isAscii(0.0));
    ok(isAscii(-0.0));
    ok(!isAscii(0.0000000000001));
    ok(!isAscii(-0.0000000000001));
    ok(!isAscii(0.0000000000009));
    ok(!isAscii(-0.0000000000009));
    ok(!isAscii(0.0000000000011));
    ok(!isAscii(-0.0000000000011));
    ok(!isAscii(0.0000000000019));
    ok(!isAscii(-0.0000000000019));
    ok(isAscii(0.0000000000000));
    ok(isAscii(-0.0000000000000));
});

test("chars::isAsciiAt", () => {
    const str = "Holy 💩";
    const index = 4;

    debug("isAsciiAt", isAsciiAt(str, index));

    ok(isAsciiAt(str, 0));
    ok(isAsciiAt(str, 1));
    ok(isAsciiAt(str, 2));
    ok(isAsciiAt(str, 3));
    ok(isAsciiAt(str, 4));
    ok(!isAsciiAt(str, 5));
});
