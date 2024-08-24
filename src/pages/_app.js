import '@/styles/globals.css'
import MainLayout from '@/components/layout/MainLayout';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Toaster />
      <Component {...pageProps} />
    </MainLayout>);
}
