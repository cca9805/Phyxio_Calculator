import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion', () => {
  const title = 'Test Title';
  const content = 'Test Content';

  it('should render the title', () => {
    render(<Accordion title={title}>{content}</Accordion>);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should not show the content by default', () => {
    render(<Accordion title={title}>{content}</Accordion>);
    expect(screen.queryByText(content)).not.toBeInTheDocument();
  });

  it('should show the content when the button is clicked', () => {
    render(<Accordion title={title}>{content}</Accordion>);
    fireEvent.click(screen.getByText(title));
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('should hide the content when the button is clicked twice', () => {
    render(<Accordion title={title}>{content}</Accordion>);
    fireEvent.click(screen.getByText(title));
    fireEvent.click(screen.getByText(title));
    expect(screen.queryByText(content)).not.toBeInTheDocument();
  });
});
