import React from 'react'
import {useRouter} from 'next/router' 

const Blog = () => {
    const router=useRouter()

    return (
        <div>
            Pagina del blog
            {router.query.id}
        </div>
    )
}

export default Blog
