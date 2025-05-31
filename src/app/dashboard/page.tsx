"use client"
import { LoadingBox } from "@/components";
import { useSessionRedirect } from "@/hooks/useSessionRedirect";


const Dashboard = () => {

    const { session, status } = useSessionRedirect()

    if (status === "loading") {
        return <LoadingBox message="Loading..."/>// Or a spinner
    }

    if (!session) {
        return <LoadingBox message="Redirecting to sign in page..."/>
    }
    
    return (
        <div>
            This is Dashboard
            {JSON.stringify(session?.user, null, 2)}
        </div>
    )
}

export default Dashboard