import { NextResponse } from 'next/server';

export default async (req, ev) => {
    // console.log(req.headers);
    NextResponse.next();
};
