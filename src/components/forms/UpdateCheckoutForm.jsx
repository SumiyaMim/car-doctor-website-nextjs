"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function UpdateCheckoutForm({ data }) {

  const { data: session } = useSession();
  // console.log(session);
  const router = useRouter();

  const handleCheckout = async (e) => {
    toast("Submitting.....");
    e.preventDefault();

    const form = e.target;
    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const checkoutPayload = {
      // User Inputs
      date,
      phone, 
      address,
    };
    // console.log(checkoutPayload);

    // update order
    const res = await fetch(
      `https://car-doctor-website-nextjs.vercel.app/api/my-order/${data._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(checkoutPayload),
      }
    );

    const postedResponse = await res.json();
    // console.log("Updated data response", postedResponse);

    toast("Update Successfully");
    router.push("/my-order"); 
  };

  return (
    <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12'>
          <div className="carousel-item relative w-full">
            <Image 
                src="/assets/images/order/order.png" 
                alt="Order" 
                width={1137}
                height={300} 
                className="w-full rounded-md"
            />
            <div className="absolute rounded-md flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="text-white space-y-7 pl-8 md:pl-12">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
                        {data?.service_name}
                    </h2>
                </div>
            </div>
          </div>

          {/* Update checkout form */}
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
                      defaultValue={`$${data?.service_price}`}
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
                      defaultValue={data?.date}
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
                      defaultValue={data?.phone}
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
                      defaultValue={data?.address}
                      className="input text-sm w-full outline-none focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <button type="submit" className="bg-[#FF3811] w-full text-white p-3 rounded-md text-base font-medium">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
    </div>
  );
}
