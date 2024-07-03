import { Suspense } from 'react';
import Loading from '@/(components)/loading'
import Nav from '@/(components)/Nav'

export default function HomeLayout({
    children,
}:{children: React.ReactNode}){
    return (
        <section>
        
        <Suspense fallback={< Loading />}>
        {children}
        </Suspense>
        
        </section>
    )
}