module.exports = {
  createThought ({ thought }) {
    console.log(`Add thought contents: ${thought}`)
    return Promise.resolve()
  }
}