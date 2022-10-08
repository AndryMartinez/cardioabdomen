import React, { useEffect, useState } from "react";


const useGetPicture = (data) => {

    let Source
    Source = 'https://cardioabdomen.herokuapp.com' + data?.data?.attributes?.Image?.data?.attributes?.url

    return { Source }
}

export default useGetPicture