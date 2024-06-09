async function fetchIpInfo(ip) {
  try {
    const token = process.env.REACT_APP_ACCESS_TOKEN;
    const response = await fetch(`https://ipinfo.io/${ip}?token=${token}`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const jsonResponse = await response.json()
    return jsonResponse
  }
  catch (error) {
    console.error('Failed to fetch IP information:', error)
    return null
  }
}

export default fetchIpInfo;