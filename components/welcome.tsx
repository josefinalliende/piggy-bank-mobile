import { Text } from 'react-native';

export default function Welcome({t}) {
  return (
    <Text>{t('Welcome.title')}</Text>
  );
}
