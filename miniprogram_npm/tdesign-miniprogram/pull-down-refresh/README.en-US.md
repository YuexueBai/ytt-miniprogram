:: BASE_DOC ::

## API
### PullDownRefresh Props

name | type | default | description | required
-- | -- | -- | -- | --
external-classes | Array | - | `['t-class', 't-class-loading','t-class-text', 't-class-indicator']` | N
loading-bar-height | String / Number | 50 | \- | N
loading-props | Object | - | Typescript：`LoadingProps`，[Loading API Documents](./loading?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/pull-down-refresh/type.ts) | N
loading-texts | Array | [] | Typescript：`string[]` | N
max-bar-height | String / Number | 80 | \- | N
refresh-timeout | Number | 3000 | \- | N
value | Boolean | false | \- | N
default-value | Boolean | false | uncontrolled property | N

### PullDownRefresh Events

name | params | description
-- | -- | --
change | `(value: boolean)` | \-
refresh | \- | \-
scrolltolower | \- | \-
timeout | \- | \-
