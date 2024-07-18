import Link from "next/link";

const NotFound = ()=>{
    return (
        <div>
         <h3> 404 - Page Not Found ...</h3>
         <Link href="/"> Return home</Link>
        </div>
    )
}

export default NotFound;