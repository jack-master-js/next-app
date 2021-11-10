import { NextResponse } from 'next/server';

export default (req, ev) => {
    // console.log(req.headers);
    NextResponse.next();
};
