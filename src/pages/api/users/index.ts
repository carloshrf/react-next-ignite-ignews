/* eslint-disable import/no-anonymous-default-export */
import{ NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Carl Johnson'},
    { id: 2, name: 'Big Smoke'},
    { id: 3, name: 'Og Loc'}
  ]

  return response.json(users)
}