import { Suspense } from 'react';
import Loading from '@/(components)/loading'
import Nav from '@/(components)/Nav'
export default function ProfileLayout({
    children,
}:{children: React.ReactNode}){
    return (
        <section>
        <Nav place = {3} color={'Dark'}/>
        <Suspense fallback={< Loading />}>
        {children}
        </Suspense>
        <div></div>
        </section>
    )
}