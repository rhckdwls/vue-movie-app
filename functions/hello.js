exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'JIN',
      age: 30,
      email: 'rhckdwls12@naver.com'
    })
  }
}