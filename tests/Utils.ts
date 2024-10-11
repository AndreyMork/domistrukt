import * as FC from 'fast-check';

const ignoredKeys = new Set(['__proto__', 'toString', 'valueOf']);
export const object = () =>
	FC.object({ key: FC.string().filter((str) => !ignoredKeys.has(str)) });
