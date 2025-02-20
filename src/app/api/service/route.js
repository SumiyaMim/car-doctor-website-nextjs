import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


// get checkout for single user
export const GET = async (req) => {

    const session = await getServerSession(authOptions)

    if (session) {
        const email = session?.user?.email
        const checkoutCollection = dbConnect(collectionNamesObj.checkoutCollection)
        const result = await checkoutCollection.find({ email }).toArray()

        return NextResponse.json(result)
    }
    return NextResponse.json({})
}

// send checkout
export const POST = async (req) => {
    const body = await req.json();
    const checkoutCollection = dbConnect(collectionNamesObj.checkoutCollection)
    const result = await checkoutCollection.insertOne(body)

    return NextResponse.json(result)
}