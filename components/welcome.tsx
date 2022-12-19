import { Text } from 'react-native';

export default function Welcome({t}) {
  return (
    <Text className="text-xl text-gray-700 font-bold">{t('Welcome.title')}</Text>
  );
}
