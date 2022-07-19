import { useEffect } from "react";
import { useForm } from "react-hook-form";

function UploadFile() {


  const { register, handleSubmit } = useForm();



  const onSubmit = (data) => {
    console.log(data);
  }


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mt-1 px-3 py-2 h-[53px]  border
          shadow-sm  placeholder-slate-400 
          focus:outline-none border-none
           block w-small rounded-md sm:text-sm focus:ring rounded-2xl"
          {...register('test', { required: true })}
          type='file' name="picture" />
        <button className="border border-purple w-[40px] h-[40px] mt-5 mb-5 rounded-md">
          +
        </button>
      </form>
    </div>
  )
}

export default UploadFile