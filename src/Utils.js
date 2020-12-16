

export const getUserData = async (url) => {
    await fetch(url)
        .then(res => res.json())
        .then((data) => {
            return data
        })
}

