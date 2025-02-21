"use client";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

export default function DeleteCheckout({ id }) {

  const router = useRouter();
  const handleDelete = async (id) => {
    const res = await fetch(
      `http://localhost:3000/api/service/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    // console.log(data);
    toast("Delete Successfully");
    router.refresh();
  };

  return (
    <>
      <MdDelete
        onClick={() => handleDelete(id)}
        className="h-6 w-6 font-bold"
      />
    </>
  );
}