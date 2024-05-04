import React, { useState } from "react"
import { convertedImage } from "@/lib/helpers"
import { SecondaryButton } from "@/dashboard/Components/Buttons"

type Media = {
  title: string
  description: string
  media?: any
}

type MediaProp = {
  data: Media
}
const MetaCard = ({ data, showButtons }: MediaProp & { showButtons?: boolean }) => {
  console.log(data)
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    if (count < data.media.length - 1) {
      setCount(count + 1)
    }
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className="w-[524px] max-w-full cursor-pointer overflow-clip rounded font-[Helvetica]">
        <div className="rounded-t border-[1px] border-b-0 border-[#dadde1] bg-cover bg-center bg-no-repeat">
          <div className="aspect-facebook relative w-full bg-primary-500">
            <img
              className="aspect-facebook relative flex w-full rounded-t object-contain"
              src={convertedImage(data.media[count]?.original_url, "meta-tags", "webp", "/img/meta/eloquent.jpg")}
              alt={`image`}
            />
          </div>
        </div>
        <div className="break-words border-[1px] border-[#dadde1] bg-[#f2f3f5] px-[12px] py-[10px] antialiased">
          <div className="overflow-hidden truncate whitespace-nowrap text-[12px] uppercase leading-[11px] text-[#606770]">eloquentblinds.co.za</div>
          <div className="block h-[46px] max-h-[46px] border-separate border-spacing-0 select-none overflow-hidden break-words text-left">
            <div className="mt-[3px] truncate pt-[2px] text-[16px] font-semibold leading-[20px] text-[#1d2129]">Eloquent Blinds | {data.title}</div>
            <div className="mt-[3px] line-clamp-1 block h-[18px] max-h-[80px] border-separate	 border-spacing-0 select-none overflow-hidden truncate whitespace-nowrap break-words text-left text-[14px] leading-[20px] text-[#606770]">
              {data.description}
            </div>
          </div>
        </div>
      </div>
      {data.media.length > 1 && showButtons && (
        <div className={`flex justify-between`}>
          <SecondaryButton disabled={count === 0} onClick={handleDecrement}>
            Prev
          </SecondaryButton>

          <SecondaryButton disabled={count === data.media.length - 1} onClick={handleIncrement}>
            Next
          </SecondaryButton>
        </div>
      )}
    </>
  )
}

export default MetaCard
