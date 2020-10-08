import React from 'react';
import { 
	render,
} from '@testing-library/react';

import TimeLabel from './TimeLabel';

test('renders Time Label component', () => {
   const { asFragment } = render(<TimeLabel />);
   expect(asFragment(<TimeLabel />)).toMatchSnapshot()
});