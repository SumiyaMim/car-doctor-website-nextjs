import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// Get single order for update
export const GET = async (req, { params }) => {
    const p = await params;
    const checkoutCollection = dbConnect(collectionNamesObj.checkoutCollection)
    const query = { _id: new ObjectId(p.id) }

    // Validation
    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    const singleOrder = await checkoutCollection.findOne(query)
    const isOwnerOK = email === singleOrder?.email

    if (isOwnerOK) {
        return NextResponse.json(singleOrder)

    } 
    else {
        return NextResponse.json({ message: "Forbidden GET action" }, {
            status: 403
        })
    }
}

// Update order
export const PATCH = async (req, { params }) => {
    const p = await params;
    const checkoutCollection = dbConnect(collectionNamesObj.checkoutCollection)
    const query = { _id: new ObjectId(p.id) }

    // Validation
    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    const currentOrderData = await checkoutCollection.findOne(query)
    const isOwnerOK = email === currentOrderData?.email

    if (isOwnerOK) {
        const body = await req.json()

        const filter = {
            $set: { ...body }
        }

        const option = {
            upsert: true
        }
        const updateResponse = await checkoutCollection.updateOne(query, filter, option)
        revalidatePath("/my-order")
        return NextResponse.json(updateResponse)
    }
    else {
        return NextResponse.json({ message: "Forbidden UPDATE action" }, {
            status: 403
        })
    }

}