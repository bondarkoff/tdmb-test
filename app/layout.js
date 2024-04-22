import { Oxygen } from 'next/font/google';
import './globals.scss';

export const metadata = {
    title: 'Movie database',
    description: 'The number one movie database',
};

const oxygen = Oxygen({ weight: ['400', '700'], subsets: ['latin'] });

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={oxygen.className}>
            <body>{children}</body>
        </html>
    );
}
