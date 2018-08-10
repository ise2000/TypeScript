// @strict: true
// @noUnusedLocals: true
// @noUnusedParameters: true

function f(x = 0, b = false) {
    x = 1;
    x++;
    x /= 2;
    ([x] = [1]);
    ({ x } = { x: 1 });
    ({ x: x } = { x: 1 });
    ({ a: [{ b: x }] } = { a: [{ b: 1 }] });
    ({ x = 2 } = { x: b ? 1 : undefined });
    let used = 1;
    ({ x = used } = { x: b ? 1 : undefined });

    let y = 0;
    // This is a write access to y, but not a write-*only* access.
    f(y++);
}
function f2(_: ReadonlyArray<number>): void {}
