"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function CheckoutForm({ data }) {

  const { data: session } = useSession();
  // console.log(session);
  const router = useRouter();

  const currentDate = new Date().toISOString().split('T')[0];

  const handleCheckout = async (e) => {
    toast("Submitting.....");
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const checkoutPayload = {
      // Session
      customerName: name,
      email,

      // User Inputs
      date,
      phone, 
      address,

      // Extra information
      service_id: data._id,
      service_name: data.title,
      service_img: data.img,
      service_price: data.price,
    };
    // console.log(checkoutPayload);

    // send order to server
    const res = await fetch("https://car-doctor-website-nextjs.vercel.app/api/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkoutPayload),
    });

    const postedResponse = await res.json();
    // console.log("POSTED DATA", postedResponse);

    toast("Checkout Successfully");
    form.reset(); 
    router.push("/my-order"); 
  };

  return (
    <div className="py-10">
      <div className="bg-[#F3F3F3] rounded-lg px-8 lg:px-20 py-12 lg:py-20">
        <form onSubmit={handleCheckout}>
          <div className="md:flex gap-7 md:mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={session?.user?.name}
                readOnly
                className="input text-sm w-full outline-none focus:outline-none"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={session?.user?.email}
                readOnly
                className="input text-sm w-full outline-none focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="md:flex gap-7 md:mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base font-semibold">Due Amount</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={`$${data?.price}`}
                readOnly
                className="input text-sm w-full outline-none focus:outline-none"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base font-semibold">Date</span>
              </label>
              <input
                type="date"
                name="date"
                defaultValue={currentDate}
                className="input text-sm w-full outline-none focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="md:flex gap-7 md:mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base font-semibold">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                className="input text-sm w-full outline-none focus:outline-none"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base font-semibold">Present Address</span>
              </label>
              <input
                type="text"
                name="address"
                className="input text-sm w-full outline-none focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mt-10">
            <button type="submit" className="bg-[#FF3811] w-full text-white p-3 rounded-md text-base font-medium">
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
