import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('renders children', () => {
    const { getByText } = render(<Button>Press</Button>);
    expect(getByText('Press')).toBeInTheDocument();
  });

  it('fires onClick', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>Press</Button>);
    await user.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('applies disabled state', () => {
    const { getByRole } = render(<Button disabled>Press</Button>);
    expect(getByRole('button')).toBeDisabled();
  });
});
