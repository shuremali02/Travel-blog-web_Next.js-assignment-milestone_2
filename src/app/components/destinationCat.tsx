export interface DesProp{
    icon:unknown;
    title:string;
    availability:string
}

export default function DesCat(props:DesProp) {
  return (
    <div className="bg-gray-200 flex flex-row gap-3 p-4 rounded-md ">
      <div className='border bg-white rounded-md p-4 text-2xl sm:text-xl flex justify-center items-center'>
        {props.icon as string}
      </div>
        <div className="flex flex-col justify-center space-y-1 text-left">
            <h1 className="text-xl sm:text-2xl font-bold ">{props.title}</h1>
            <p className="text-sm ">{props.availability}</p>
        </div>
    </div>
  )
}
