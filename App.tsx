import { View } from 'react-native';
import { useTranslation } from 'react-i18next'
import './localization/i18n';
import Welcome from './components/welcome';

export default function App() {
  const { t } = useTranslation()
  return (
    <View className="flex-1 items-center justify-center">
      <Welcome t={t} />
    </View>
  );
}
