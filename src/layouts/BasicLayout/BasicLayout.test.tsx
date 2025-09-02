import { render } from '@testing-library/react';
import BasicLayout from './BasicLayout';

describe('BasicLayout', () => {
  it('renders children', () => {
    const { getByText } = render(
      <BasicLayout>
        <div>child</div>
      </BasicLayout>,
    );
    expect(getByText('child')).toBeInTheDocument();
  });
});
