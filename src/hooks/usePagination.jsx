import React, { useEffect, useState } from "react";


const usePagination = (collection) => {
    const [data , setData] = useState([])
    const [error, setError ] = useState(false)
    const [loading , setLoading] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch('http://localhost:1337/api/' + collection)
                .then(response => response.json())
                .then(result => (result)) //--> data
                .catch(error => console.log('error', error))

                setData(res.meta)
                setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }

        fetchData()
    },[collection])


    return { error , loading , data }
}

export default usePagination