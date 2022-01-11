import { NextResponse } from 'next/server';

export default function globalMiddleware(req, ev) {
    console.log(req.ua);
    console.log(ev);
    // return NextResponse.redirect('https://google.com');
    return NextResponse.next();
    // return new Response(JSON.stringify({ msg: 'hi' }), {
    //     status: 200,
    // });
}
