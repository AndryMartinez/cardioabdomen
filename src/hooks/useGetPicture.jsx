import React, { useEffect, useState } from "react";


const useGetPicture = (data) => {

    let Source
    Source = 'http://localhost:1337' + data?.attributes?.Image?.data?.attributes?.url

    return { Source }
}

export default useGetPicture