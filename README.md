# Map2String

Stringify ES6 Map to storage some where else

## Install

```bash
// use npm
npm install map2string

// or use yarn
yarn add map2string

// or use pnpm
pnpm add map2string
```

---

## Usage

### In web browser

```html
<script src="map2string.js"></script>
<script>
  const map = new Map();
  map.set("foo", "bar");
  map.set("bar", "baz");

  const str = map2string.convert(map);
  // str = '{"foo":"bar","bar":"baz"}'

  const map2 = map2string.parse(str);
  // map2 = Map { 'foo' => 'bar', 'bar' => 'baz' }
</script>
```

### In Node.js

```js
const map2string = require("map2string");

const map = new Map();
map.set("foo", "bar");
map.set("bar", "baz");

const str = map2string.convert(map);
// str = '{"foo":"bar","bar":"baz"}'

const map2 = map2string.parse(str);
// map2 = Map { 'foo' => 'bar', 'bar' => 'baz' }
```

### In React

```js
import { convert, parse } from "map2string";

const map = new Map();
map.set("foo", "bar");
map.set("bar", "baz");

const str = convert(map);
// str = '{"foo":"bar","bar":"baz"}'

const map2 = parse(str);
// map2 = Map { 'foo' => 'bar', 'bar' => 'baz' }
```

---

## License

MIT
