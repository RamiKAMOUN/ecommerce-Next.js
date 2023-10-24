import NavScroll from '@/components/admin/NavScroll'
export default function RootLayout({ children }) {
return (
<>
<NavScroll/>
{children}
</>
)
}