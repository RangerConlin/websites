import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'ArcadiaOne — Your business. One workspace.',description:'ArcadiaOne is open source, self-hosted software for employee management, projects, clients, equipment, and business operations. Your business. One workspace.',icons:{icon:'/arcadia-mark.png'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
