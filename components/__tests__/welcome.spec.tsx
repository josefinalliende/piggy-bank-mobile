import { render, screen } from '@testing-library/react-native';
import Welcome from '../welcome';
describe('Welcome', () => {
  function renderComponent() {
    const t = (key: string) => key;
    render(
      <Welcome t={t}/>
    );
  }

  it ('should render the welcome message', () => {
    renderComponent();
    expect(screen.getByText('Welcome.title')).toBeTruthy();
  })

});
