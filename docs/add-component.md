# Add an component

If you want to add a new component to the project, you have to follow theses conventions.

## Basic rules

- All components should be in the `src/components` folder
- All components should be typed using `FC`
- All components should be exported using `export default`
- All components should be named using `PascalCase`
- All components should be an `const`

```tsx
import type { FC } from 'react';

const MyComponent: FC = () => {
	return <div>My component</div>;
};

export default MyComponent;
```

## Styling rules

## Translation rules

If you need an message. Add it in `i18n/en.json` and use it in your component. _you don't need to add in other file_

Message should format like that: `folder.subFolder.item`

example:

```json
{
	"components.hello.title": "Hello world"
}
```

Example of usage:

```tsx
import { FormattedMessage } from 'react-intl';
import type { FC } from 'react';

const MyComponent: FC = () => {
	return (
		<div>
			<FormattedMessage id="folder.subFolder.item" />
		</div>
	);
};
```

## Testing rules

If you add an new feature, please add tests for it.

We use [Jest](https://jestjs.io/) for testing.
