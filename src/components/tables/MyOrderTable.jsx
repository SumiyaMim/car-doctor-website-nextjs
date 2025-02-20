import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";

export default function MyOrderTable({ data }) {
  return (
    <div className="overflow-x-auto py-20">
        <table className="table">
            <tbody>
                {data?.map((item) => (
                    <tr key={item._id}>
                        <td>
                            <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask rounded-md w-10 h-10 md:w-20 md:h-20">
                                <Image
                                    src={item.service_img}
                                    alt={item.service_name}
                                    width={50}
                                    height={50}
                                />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold text-xs md:text-sm lg:text-base">
                                {item.service_name}
                                </div>
                            </div>
                            </div>
                        </td>
                        <td className="font-semibold text-xs lg:text-sm">{item.date}</td>
                        <td className="font-semibold text-xs lg:text-sm">{item.service_price}</td>
                        <td className="font-semibold text-xs lg:text-sm">{item.phone}</td>
                        <td className="font-semibold text-xs lg:text-sm">{item.address}</td>
                        <td>
                            <Link href={`/my-bookings/${item._id}`}>
                            <FaRegEdit className="h-6 w-6 font-bold" />
                            </Link>
                        </td>
                        <td>
                            {/* <DeleteBookingButton id={item._id} /> */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
