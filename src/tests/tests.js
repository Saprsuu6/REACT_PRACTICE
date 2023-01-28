function add(a, b) {
  return a + b;
}

QUnit.module("add", (hooks) => {
  hooks.beforeEach((assert) => {
    assert.ok(true, "beforeEach called");
  });

  hooks.afterEach((assert) => {
    assert.ok(true, "afterEach called");
  });

  QUnit.test("two numbers", (assert) => {
    assert.equal(add(1, 2), 3);
  });
});
