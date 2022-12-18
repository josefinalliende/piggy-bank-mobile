import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next'
import './localization/i18n';
import Welcome from './components/welcome';

export default function App() {
  const { t } = useTranslation()
  return (
    <View style={styles.container}>
      <Welcome t={t} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
