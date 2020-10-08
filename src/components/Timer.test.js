import React from 'react';
import { 
	render,
} from '@testing-library/react';

import Timer from './Timer';

test('renders Timer component', () => {
   const { asFragment } = render(<Timer />);
   expect(asFragment(<Timer />)).toMatchSnapshot()
});