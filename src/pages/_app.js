import '@/styles/globals.css'
import MainLayout from '@/components/layout/MainLayout';

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>);
}
