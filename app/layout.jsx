export const metadata = {
  title: 'Solar System Portfolio',
  description: 'An immersive 3D portfolio inspired by our solar system.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
