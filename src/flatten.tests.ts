import { deepStrictEqual } from "assert";
import { flatten } from "./flatten";

// Single item
deepStrictEqual([1], flatten([1]));

// Empty array
deepStrictEqual([], flatten([]));

// Flatten an already flat array
deepStrictEqual(
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  flatten([1, 2, 3, 4, 5, 6, 7, 8, 9])
);

// Take a mixed set of primitives
deepStrictEqual([1, 2, 3, "banana"], flatten([1, [2, [3]], "banana"]));

// Arbitrary nesting
deepStrictEqual([1, 2, 3, 4, 5, 6], flatten([1, [2, [3]], [4, [5, [6]]]]));

// Nested several different types, including a nested array inside an object (will not be found/flattened)
deepStrictEqual(
  [1, "orange", 3, { id: 5, nestedArrayNotbeingFound: [7] }, 4],
  flatten([1, ["orange", [3, { id: 5, nestedArrayNotbeingFound: [7] }]], 4])
);

// Typescript prevents calling with non-array calls e.g. flatten("bob")

// Further tests not provided could be - clamping the depth to avoid stack overflows.
