import { NextFunction, Request, Response } from 'express'

export default async function logMiddleware(req: Request, res: Response, next: NextFunction) { //mid de logs
  const { method, url } = req
  const trace = `${method} ${url}`

  console.info(trace)
  console.time()
  await next()
  console.timeEnd()
}