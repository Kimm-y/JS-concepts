const container = document.querySelector('.container')
const fetchData= async () => {
    const response = await fetch ( 'https://api.walobwa.xyz/store/products')
    const data = await response.json()
    console.log(data)
    }
    fetchData()
