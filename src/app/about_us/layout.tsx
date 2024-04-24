import { Suspense } from 'react';
import Loading from '@/(components)/loading'
import Nav from '@/(components)/Nav'
export default function HomeLayout({
    children,
}:{children: React.ReactNode}){
    return (
        <section>
        <Nav place = {0}/>
        <Suspense fallback={< Loading />}>
        {children}
        </Suspense>
        
        </section>
    )
}