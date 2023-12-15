import React from 'react'
import { IoMdClose } from 'react-icons/io'

const Modal = () => {
  return (

    <>
    <div className='
    justify-center
    items-center
    flex
    overflow-x-hidden
    overflow-y-auto
    fixed
    inset-0
    z-50
    outline-none
    focus:outline-none
    bg-neutral-800/70
    '>
        <div className='
        relative
        w-full
        md:w-4/6
        lg:w-3/6
        xl:w-2/5
        my-6
        mx-auto
        h-full
        lg:h-auto
        md:h-auto
        '>
            {/content/}
            <div className={`
            translate
            duration-300
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}   
                  `}>

                <div className='
                translate
                h-full
                lg:h-auto
                md:h-auto
                border-0
                rounded-lg
                shadow-lg
                relative
                flex
                flex-col
                w-full
                bg-white
                outline-none
                focus:outline-none
                '>
                    {/* Header */}
                    <div className='
                    flex
                    items-center
                    p-2
                    rounded-t
                    justify-center
                    relative
                    border-b-[1px]
                    '>
                        <button className='
                        p-1
                        border-0
                        hover:opacity-70
                        transition
                        absolute
                        left-9
                        '>
                            <IoMdClose size={18} />

                        </button>
                        <div className='text-lg font-semibold'>
                            {/* {title} */}
                        </div>
                    </div>
                    {/* body */}
                    <div className='relative p-5 flex-auto'>
                        {/* {body} */}
                    </div>
                    {/* footer */}
                    {/* <div className='flex flex-col gap-2 p-5'>
                        <div className='
                        flex
                        flex-row
                        items-center
                        gap-4
                        w-full
                        '>
                            {secondaryAction && secondaryActionLabel && (
                                <Button
                                    outline
                                    disabled={disabled}
                                    label={secondaryActionLabel}
                                    onClick={handleSecondaryAction}
                                />
                            )}
                            <Button
                                disabled={disabled}
                                label={actionLabel}
                                onClick={handleSubmit}
                            />
                        </div> */}
                        {/* {footer} */}
                    </div>
                </div>
            </div>
        </div>

    </div>
</>
    
  )
}

export default Modal