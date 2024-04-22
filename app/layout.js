import './globals.scss';

export const metadata = {
    title: 'Movie database',
    description: 'The number one movie database',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
