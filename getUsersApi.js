async function getUsers() {
    const result = await fetch(`https://randomuser.me/api/?results=10`)
    const r = await result.json()
    return r;
}

module.exports = { getUsers }