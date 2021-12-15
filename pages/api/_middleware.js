import { NextResponse } from 'next/server';

export default function globalMiddleware(req, ev) {
    // console.log(req.headers.get('Authorization'));
    return NextResponse.next();
    // return new Response(JSON.stringify({ msg: 'hi' }), {
    //     status: 200,
    // });
}
