import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// Get single service
export const GET = async (req, { params }) => {
    const p = await params;
    const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });

    return NextResponse.json(data);
}

// Delete user specific order
export const DELETE = async (req, { params }) => {

    const checkoutCollection = dbConnect(collectionNamesObj.checkoutCollection)
    const p = await params;
    const query = { _id: new ObjectId(p.id) }

    // Validation
    const session = await getServerSession(authOptions)
    const currentOrder = await checkoutCollection.findOne(query)

    const isOwnerOK = session?.user?.email == currentOrder.email

    if (isOwnerOK) {
        // Delete user specific order
        const deleteResponse = await checkoutCollection.deleteOne(query)
        revalidatePath("/my-order")
        return NextResponse.json(deleteResponse)
    }
    else {
        return NextResponse.json({ success: false, message: "Forbidden Action" }, { status: 401 })
    }
}