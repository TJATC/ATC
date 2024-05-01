import { Suspense } from 'react';
import Loading from '@/(components)/loading'
import Nav from '@/(components)/Nav'
export default function SignupLayout({
    children,
}:{children: React.ReactNode}){
    return (
        <section>
        <Nav place = {4} color={'Dark'}/>
        <Suspense fallback={< Loading />}>
        {children}
        </Suspense>
        <div></div>
        </section>
    )
}