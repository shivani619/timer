import React from 'react';
import { 
	render,
} from '@testing-library/react';

import Button from './Button';

test('renders Button component', () => {
   const { asFragment } = render(<Button />);
   expect(asFragment(<Button />)).toMatchSnapshot()
});
