import { NextResponse } from 'next/server';

export default async function globalMiddleware(req, ev) {
    // console.log(req.headers.get('Authorization'));
    NextResponse.next();
}
