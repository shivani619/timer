import React from 'react';
import { 
	render,
} from '@testing-library/react';

import TextLabel from './TextLabel';

test('renders Text Label component', () => {
   const { asFragment } = render(<TextLabel />);
   expect(asFragment(<TextLabel />)).toMatchSnapshot()
});